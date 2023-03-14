# How to setup mongoDB and Mongoose with React

This React app has been created as a guide and reference for creating a full-stack application using MongoDB and Mongoose on the backend.

## Technologies and dependencies
**Frontend:** React, React-Router-DOM, axios, react-bootstrap, bulma

**Backend:** express, nodemon, cors, mongoose

  


## Installation - server
To install dependencies needed for the server, cd into the server directory and run the following:

```bash
npm install
```

## Installation - client
To install required dependencies and run the front-end, cd into the client directory and run the following:

```bash
npm install
npm start
```

## Setup - BACKEND
cd into the server directory and create the following 3 folders:

```bash
~ mkdir models routes controllers
```
Next, create the following files:
```bash
~ touch index.js models/ArticleModel.js routes/ArticleRoute.js controllers/ArticleController.js
```

In index.js setup express and ensure server is up and running. We will return to this once other files have been setup
```javascript
const express = require("express");
const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

```

Run the command below in the terminal, and you should see the message `App is listening on port 5000` in the console as well as 'hello world' in the browser.
```bash
nodemon index.js
```
#### Creating the model
cd into models/ArticleModel.js

```javascript
import mongoose from "mongoose";

const Article = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Articles", Article);

```

#### Controller
cd into controllers/ArticleCOntroller.js

```javascript
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


```


#### Routes
cd into routes/ArticleRoute,js
```javascript
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

```

#### Connect database
cd back to index.js

```javascript
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

```
#References
- https://www.youtube.com/watch?v=R5jNlWOv5qk&t=1478s
- https://www.mongodb.com/docs/
- https://mongoosejs.com/docs/guide.html
- http://expressjs.com/en/guide/routing.html


