import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  cors({
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT} !`);
});
