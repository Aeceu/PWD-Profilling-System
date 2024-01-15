import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TUser, TUserSignup } from "../types/user";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: TUser | null = await prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        emergencyPerson: true,
      },
    });

    if (!user) {
      res.status(400).json("user doesn't exists!");
    }

    const validPass = await bcrypt.compare(password, user?.password!);
    if (!validPass) {
      res.status(400).json("Password doesn't match!");
    }

    const user_data = {
      id: user?.id,
      email: user?.email,
      role: user?.role,
    };

    const accessToken = jwt.sign(user_data, process.env.TOKEN_SECRET!, {
      expiresIn: "10s",
    });
    const userRefreshToken = jwt.sign(user_data, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        refreshToken: userRefreshToken,
      },
    });

    res.cookie("jwt", userRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    if (user) {
      delete user["password"];
      delete user["refreshToken"];
    }
    res.status(200).json({
      message: `${user?.role} AUTHENTICATED!`,
      accessToken,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const data: TUserSignup = req.body;

    const userExists = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) return res.status(400).send("User already registered!");

    if (!data.password) {
      return res.status(400).json("Password is needed!");
    }

    const hashPass = await bcrypt.hash(data.password, 12);

    await prisma.user.create({
      data: {
        ...data,
        password: hashPass,
        role: "user",
        age: Number(data.age),
        emergencyPerson: {
          create: {
            ...data.emergencyPerson,
            age: Number(data.emergencyPerson?.age),
          },
        },
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
  const foundUser = await prisma.user.findFirst({
    where: {
      refreshToken,
    },
  });

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    return res.sendStatus(204);
  }

  //* Delete refreshToken in db
  await prisma.user.update({
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
