import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtConfig } from "./../config/jwt";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({
      message: "Unauthorized",
    });

  jwt.verify(token, jwtConfig.secret, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({
        message: "Forbidden!",
      });
    }
    // req.user = decoded;
    next();
  });
};
export { authenticateToken };
