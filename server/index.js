import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ArticleRoute from "./routes/ArticleRoute.js";
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(ArticleRoute);

mongoose.connect("mongodb://localhost:27017/articles", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
