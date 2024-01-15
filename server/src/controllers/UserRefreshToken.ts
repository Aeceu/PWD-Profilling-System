import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TUser } from "../types/user";

const prisma = new PrismaClient();

export const handleRefreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  const foundUser: TUser | null = await prisma.user.findFirst({
    where: {
      refreshToken,
    },
    include: {
      emergencyPerson: true,
    },
  });

  if (!foundUser) return res.sendStatus(403);

  jwt.verify(
    refreshToken,
    process.env.TOKEN_SECRET!,
    (err: any, decoded: any) => {
      if (err || foundUser?.email !== decoded.email) {
        return res.sendStatus(403);
      }
      foundUser && delete foundUser["password"];
      foundUser && delete foundUser["refreshToken"];
      const accessToken = jwt.sign(
        {
          user_data: {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role,
          },
        },
        process.env.TOKEN_SECRET!,
        {
          expiresIn: "10s",
        }
      );
      res.json({ user: foundUser, accessToken });
    }
  );
};
