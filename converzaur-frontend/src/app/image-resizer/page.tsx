'use client'
import { useState } from "react";

export default function ImageResizerPage() {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [originalDimensions, setOriginalDimensions] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Create an image object to get dimensions
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setOriginalDimensions({ width: img.width, height: img.height });
          setWidth(img.width);  // Set default width
          setHeight(img.height); // Set default height
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const resizeImage = () => {
    if (!image || !width || !height) return;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = parseInt(width);
      canvas.height = parseInt(height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setResizedImage(canvas.toDataURL());
    };
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Image Resizer</h1>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full mb-4"
        />
      </div>
      {image && (
        <div className="mb-6">
          <img src={image} alt="Preview" className="w-full max-h-64 object-cover" />
          {originalDimensions && (
            <div className="mt-2 text-center">
              <p>Original Dimensions: {originalDimensions.width} x {originalDimensions.height}</p>
            </div>
          )}
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2">Width (px):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter new width"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Height (px):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter new height"
        />
      </div>
      <button
        onClick={resizeImage}
        className="bg-primary text-white py-2 px-4 rounded"
      >
        Resize Image
      </button>

      {resizedImage && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Resized Image:</h2>
          <img src={resizedImage} alt="Resized" className="w-full max-h-64 object-cover" />
          <a
            href={resizedImage}
            download="resized-image.png"
            className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded"
          >
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  );
}
