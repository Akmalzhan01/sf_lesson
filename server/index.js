import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";

import Alllesson from "./routes/lesson.js";
import authRoute from "./routes/auth.js"


// constants
dotenv.config()
const port = process.env.PORT
const app = express();

// Middleware
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/post", Alllesson)


async function start() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PASS}@cluster0.dko0e4u.mongodb.net/?retryWrites=true&w=majority`)
    app.listen(port, () => console.log("hello world!", port))
  } catch (error) {
    console.log(error);
  }
}


start()
