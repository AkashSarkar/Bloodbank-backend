import { jwtConfig } from "./../config/jwt";
import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authRoutes = Router();

authRoutes.post("/login", (req: Request, res: Response) => {
  const username = req.body.username;
  const user = {
    name: username,
  };
  const token = jwt.sign(user, jwtConfig.secret);
  return res.status(200).json({
    token: token,
  });
});

export default authRoutes;
