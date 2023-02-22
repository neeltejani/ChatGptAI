import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 5000;
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to Mongoose Database");
  server
    .listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
