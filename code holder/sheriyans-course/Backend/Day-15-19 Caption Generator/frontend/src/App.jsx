import React, { useState } from "react";
import "./App.scss";

function App() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setCaption(data.caption);
    } catch (err) {
      console.error(err);
      setCaption("Error generating caption.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🖼️ Image Caption Generator</h1>

        <form onSubmit={handleUpload} className="upload-form">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Upload & Generate"}
          </button>
        </form>

        {file && (
          <div className="preview">
            <img src={URL.createObjectURL(file)} alt="Preview" />
          </div>
        )}

        {caption && (
          <div className="caption-box">
            <h3>✨ Generated Caption:</h3>
            <p>{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
