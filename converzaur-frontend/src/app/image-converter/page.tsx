'use client';
import React, { useState, ChangeEvent } from "react";

export default function ImageConverterPage() {
  const [image, setImage] = useState<string | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [format, setFormat] = useState<string>("image/png");
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleImageChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const convertImage = () => {
    if (!image) return;

    setIsConverting(true);
    setProgress(0);

    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const interval = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress >= 100) {
              clearInterval(interval);
              return 100;
            }
            return oldProgress + 20; // Increment progress
          });
        }, 1000); // Update every second

        setTimeout(() => {
          const newImageData = canvas.toDataURL(format);
          setConvertedImage(newImageData);
          setIsConverting(false);
          setProgress(100);
          clearInterval(interval);
        }, 5000); // Ensure the process takes at least 5 seconds
      } else {
        // Handle the error case where `getContext` might be null
        setIsConverting(false);
        alert("Failed to create a canvas context for conversion.");
      }
    };
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Image Format Converter</h1>

      {/* Center the Choose File button */}
      <div className="flex justify-center mb-4">
        <label className="block cursor-pointer">
          <span className="inline-block bg-primary text-white py-2 px-4 rounded shadow">
            Choose File
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      {image && (
        <div className="mb-6">
          <img src={image} alt="Preview" className="w-full max-h-64 object-cover" />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-2">Select Format:</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="image/png">PNG</option>
          <option value="image/jpeg">JPEG</option>
          <option value="image/webp">WebP</option>
          <option value="image/bmp">BMP</option>
          <option value="image/gif">GIF</option>
          <option value="image/tiff">TIFF</option>
        </select>
      </div>

      <button
        onClick={convertImage}
        className="bg-primary text-white py-2 px-4 rounded"
        disabled={isConverting}
      >
        {isConverting ? "Converting..." : "Convert Image"}
      </button>

      {isConverting && (
        <div className="mt-4">
          <div className="bg-gray-300 h-4 rounded">
            <div
              className="bg-primary h-full rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center mt-2">{progress}%</p>
        </div>
      )}

      {convertedImage && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Converted Image:</h2>
          <img src={convertedImage} alt="Converted" className="w-full max-h-64 object-cover" />
          <a
            href={convertedImage}
            download={`converted-image.${format.split('/')[1]}`}
            className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded"
          >
            Download Converted Image
          </a>
        </div>
      )}
    </div>
  );
}
