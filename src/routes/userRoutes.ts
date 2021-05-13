import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  return res.send("user");
});

export default userRoutes;
