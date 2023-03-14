import express from "express";
import {
  getArticles,
  getArticleById,
  saveArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/ArticleController.js";

const router = express.Router();

router.get("/articles", getArticles);
router.get("/articles/:id", getArticleById);
router.post("/articles", saveArticle);
router.patch("/articles/:id", updateArticle);
router.delete("/articles/:id", deleteArticle);

export default router;
