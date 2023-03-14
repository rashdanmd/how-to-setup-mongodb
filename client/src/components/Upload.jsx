import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const saveArticle = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/articles", {
        title,
        description,
        category,
      });
      navigate("/manage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Upload</h1>
      <div className="columns mt-5 upload-section">
        <div className="column is-half">
          <form onSubmit={saveArticle}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
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
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Categories</label>
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
              <div className="control">
                <button type="submit" className="button is-info">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Upload;
