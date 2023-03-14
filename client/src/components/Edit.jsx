import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getArticleById();
  }, []);

  const getArticleById = async () => {
    const response = await axios.get(`http://localhost:5000/articles/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setCategory(response.data.category);
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/articles/${id}`, {
        title,
        description,
        category,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Edit</h1>
      <div className="columns mt-5 edit-section">
        <div className="column is-half">
          <form onSubmit={updateArticle}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="title"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="description"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Arts & Entertainment">
                      Arts & Entertainment
                    </option>
                    <option value="Climate">Climate</option>
                    <option value="Economics">Economics</option>
                    <option value="Health">Health</option>
                    <option value="Politics">Politics</option>
                    <option value="Sport">Sport</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <></>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-info">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EditArticle;
