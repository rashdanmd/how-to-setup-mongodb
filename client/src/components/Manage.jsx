import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

const Manage = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles");
    setArticles(response.data);
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/articles/${id}`);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main>
        <h1>Manage</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Descrition</th>
              <th>Category</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article._id}>
                {/* <td>{index + 1}</td> */}
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>{article.category}</td>
                <td>
                  <Link to={`edit/${article._id}`}>Edit</Link>
                  <button onClick={() => deleteArticle(article._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </>
  );
};

export default Manage;
