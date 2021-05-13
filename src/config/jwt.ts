import * as dotenv from "dotenv";
dotenv.config();

export const jwtConfig = {
  secret: process.env.JWT_SECRET || "secretwebjwttoken",
  options: {
    expiresIn: process.env.JWT_EXPIRES_IN,
    issuer: process.env.DOMAIN,
  },
};
