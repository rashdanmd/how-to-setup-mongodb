import Article from "../models/ArticleModel.js";

/****  Get all articles  ****/
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**** Get an article by Id ****/
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**** Save article ****/
export const saveArticle = async (req, res) => {
  const article = new Article(req.body);
  try {
    const postArticle = await article.save();
    res.status(201).json(postArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**** Update article ****/
export const updateArticle = async (req, res) => {
  try {
    const updateArticle = await Article.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**** Delete article ****/
export const deleteArticle = async (req, res) => {
  try {
    const deleteArticle = await Article.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
