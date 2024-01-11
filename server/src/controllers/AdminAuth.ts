import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TAdmin, TAdminSignup } from "../types/admin";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const admin: TAdmin | null = await prisma.admin.findFirst({
      where: {
        email,
      },
    });

    if (!admin) {
      res.status(400).json("Admin doesn't exists!");
    }

    const validPass = await bcrypt.compare(password, admin?.password!);
    if (!validPass) {
      res.status(400).json("Password doesn't match!");
    }

    const admin_data = {
      id: admin?.id,
      email: admin?.email,
      role: admin?.role,
    };

    const accessToken = jwt.sign(admin_data, process.env.TOKEN_SECRET!, {
      expiresIn: "10s",
    });
    const adminRefreshToken = jwt.sign(admin_data, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    await prisma.admin.update({
      where: {
        id: admin?.id,
      },
      data: {
        refreshToken: adminRefreshToken,
      },
    });

    res.cookie("jwt", adminRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    if (admin) {
      delete admin["password"];
      delete admin["refreshToken"];
    }
    res.status(200).json({
      message: `${admin?.role} AUTHENTICATED!`,
      accessToken,
      admin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const data: TAdminSignup = req.body;

    const adminExists = await prisma.admin.findFirst({
      where: {
        email: data.email,
      },
    });

    if (adminExists) return res.status(400).send("Admin already registered!");

    const hashPass = await bcrypt.hash(data.password, 12);

    await prisma.admin.create({
      data: {
        ...data,
        password: hashPass,
      },
    });

    res.status(200).send("Registered Successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  //* Is refreshToken in db?
  const foundUser = await prisma.admin.findFirst({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    return res.sendStatus(204);
  }

  //* Delete refreshToken in db
  await prisma.admin.update({
    where: {
      id: foundUser.id,
    },
    data: {
      refreshToken: null,
    },
  });

  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.status(200).send("Cookie removed");
};
