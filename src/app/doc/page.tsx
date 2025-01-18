"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Category {
  id: number;
  name: string;
}

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Fetch categories on page load
  useEffect(() => {
    axios
      .get<Category[]>("/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Failed to fetch categories:", error));
  }, []);

  // Handle file drop
  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles((prev) => [...prev, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Handle file upload
  const handleUpload = async () => {
    if (!uploadedFiles.length || !selectedCategory) {
      alert("Please upload files and select a category.");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    uploadedFiles.forEach((file) => formData.append("files", file));
    formData.append("category", selectedCategory);
    formData.append("tags", tags);

    try {
      await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Files uploaded successfully!");
      setUploadedFiles([]);
      setTags("");
      setSelectedCategory("");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload files.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 border rounded shadow">
      <h1 className="text-2xl font-bold mb-5">Document Upload</h1>

      {/* Drag and Drop Area */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed p-6 mb-4 cursor-pointer text-center"
      >
        <input {...getInputProps()} />
        <p>Drag and drop your files here, or click to select files</p>
      </div>

      {/* File Preview */}
      {uploadedFiles.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold">Files to Upload:</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Category Selection */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Category:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">-- Select a Category --</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Tags Input */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Tags (comma-separated):
        </label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className={`bg-blue-500 text-white py-2 px-4 rounded ${
          isUploading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
