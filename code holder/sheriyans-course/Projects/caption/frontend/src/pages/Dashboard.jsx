import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import api from "../api/api";

const Dashboard = () => {
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | Caption Genius";
  }, []);

  // Handle file selection
  const onFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag and drop
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Convert dataURL to File
  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // Generate caption
  const generateCaption = async () => {
    if (!preview) return;

    setLoading(true);
    try {
      const file = dataURLtoFile(preview, "upload.jpg");
      const formData = new FormData();
      formData.append("image", file);

      const apiResponse = await api.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const newPost = apiResponse.data.post;
      setCaption(newPost.caption);
      setPosts((prev) => [newPost, ...prev]);
      setPreview("");
    } catch (error) {
      console.error("Error generating caption:", error);
      alert(error.response?.data?.message || "Failed to generate caption");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    // Optionally, clear cookies if needed
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>Caption Generator</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <main className="main-content">
        <section className="upload-section">
          <h2>Upload Image</h2>

          <div
            className={`drop-area ${preview ? "has-preview" : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="image-preview" />
            ) : (
              <div className="drop-message">
                <p>Drag & drop an image here or click to select</p>
                <p className="small">Supports JPEG, PNG</p>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileInputChange}
              accept="image/*"
              className="file-input"
              style={{ display: "none" }}
            />
          </div>

          {preview && (
            <button
              onClick={generateCaption}
              disabled={loading}
              className="generate-button"
            >
              {loading ? "Generating..." : "Generate Caption"}
            </button>
          )}
        </section>

        {caption && posts[0] && (
          <section className="current-result">
            <h3>Latest Caption:</h3>
            <div className="caption-card">
              <img
                src={posts[0]?.image}
                alt="Generated for"
                className="result-image"
              />
              <p className="caption-text">{caption}</p>
            </div>
          </section>
        )}

        {posts.length > 0 && (
          <section className="history-section">
            <h3>Your Previous Captions</h3>
            <div className="captions-grid">
              {posts.map((post) => (
                <div key={post._id} className="caption-card">
                  <img
                    src={post.image}
                    alt="Generated for"
                    className="result-image"
                  />
                  <p className="caption-text">{post.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
