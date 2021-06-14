import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./src/routes/userRoutes";
import authRoutes from "./src/routes/authRoutes";
import { authenticateToken } from "./src/middleware/AuthenticateJwt";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app = express();

const port = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(authenticateToken);

app.use("/auth", authRoutes);
app.use("/user", authenticateToken, userRoutes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
