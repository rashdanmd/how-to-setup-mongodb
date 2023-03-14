import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import Preview from "./Preview";

const Home = () => {
  /************  React Bootstrap   **********/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (article) => {
    setSelectedArticle(article);
    setShow(true);
  };
  /*****************************************/

  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles");
    setArticles(response.data);
  };

  return (
    <main>
      <h1>Home</h1>
      <div className="card-section">
        {articles.map((article) => (
          <ArticleCard
            title={article.title}
            description={article.description}
            category={article.category}
            handleShow={() => handleShow(article)}
            link={article._id}
          />
        ))}
        <Preview
          show={show}
          handleClose={handleClose}
          title={selectedArticle ? selectedArticle.title : ""}
          description={selectedArticle ? selectedArticle.description : ""}
          category={selectedArticle ? selectedArticle.category : ""}
        />
      </div>
    </main>
  );
};

export default Home;
