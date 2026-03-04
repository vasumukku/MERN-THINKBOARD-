import React, { useState } from "react";
import axios from "./axios";

const Body = ({ data }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  //  DELETE NOTE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      alert("Deleted successfully");
      window.location.reload(); // quick refresh
    } catch (err) {
      console.log(err);
    }
  };

  //  START EDIT
  const startEdit = (note) => {
    setEditId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  //  UPDATE NOTE
  const handleUpdate = async () => {
    try {
      await axios.put(`/api/notes/${editId}`, {
        title: editTitle,
        content: editContent,
      });

      alert("Updated successfully");
      setEditId(null);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((note) => (
        <div
          key={note._id}
          style={{
            backgroundColor: "black",
            borderTop: "10px solid red",
            width: "25vw",
            color: "#fff",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            padding: "20px",
            margin: "10px",
          }}
        >
          {/* EDIT MODE */}
          {editId === note._id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <input
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />

              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h1>{note.title}</h1>
              <p>{note.content}</p>

              <button
                style={{
                  backgroundColor: "grey",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "10px",
                  marginRight: "20px",
                }}
                onClick={() => startEdit(note)}
              >
                Edit
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "10px",
                }}
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Body;