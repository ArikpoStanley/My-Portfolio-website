import { useState } from "react";
import {message} from "antd"
const Admin = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [status, setStatus] = useState("pending");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    formData.append("title", title);
    formData.append("url", url);
    formData.append("githubLink", githubLink);
    formData.append("status", status);
  
    try {
      const response = await fetch("http://localhost:3003/api/v1/project/create", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("Server Response:", data);
      message.success("Project successfully added!");
    } catch (error) {
      console.error("Upload failed:", error);
      message.error("Failed to submit project.");
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project Title" className="w-full p-2 border rounded" required />

        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Project URL" className="w-full p-2 border rounded" required />

        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="w-32 h-32 object-cover mt-2" />}

        <input type="url" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} placeholder="GitHub Repository Link" className="w-full p-2 border rounded" />

        <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded">
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="upcoming">Upcoming</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
