import React, { useState } from "react";
import axios from "./axios"; // your axios config file

const Forms = ({ state, setstate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/notes", {
        title,
        content
      });

      console.log(res.data);

      // clear form
      setTitle("");
      setContent("");

      // go back to body page
      setstate(true);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Add Note</h2>

        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Content</label>
          <input
            type="text"
            placeholder="Enter content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forms;