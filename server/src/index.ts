import cors from "cors";
import dotenv from "dotenv";
import express, { Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouters";
import adminRouter from "./routers/adminRouters";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", adminRouter);
app.use("/api/v1", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT} !`);
});
