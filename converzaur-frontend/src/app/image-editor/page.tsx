'use client';
import React, { useState, useRef, ChangeEvent } from "react";

interface CropDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function ImageEditorPage() {
  const [image, setImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [cropDimensions, setCropDimensions] = useState<CropDimensions>({ x: 0, y: 0, width: 0, height: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          drawImageOnCanvas(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const drawImageOnCanvas = (imgSrc: string) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        ctx.save();
        ctx.translate(canvasRef.current!.width / 2, canvasRef.current!.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2); // Centered drawing
        ctx.restore();
      };
    }
  };

  const cropImage = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      const { x, y, width, height } = cropDimensions;
      const imageData = ctx.getImageData(x, y, width, height);

      const newCanvas = document.createElement("canvas");
      newCanvas.width = width;
      newCanvas.height = height;
      const newCtx = newCanvas.getContext("2d");

      if (newCtx) {
        newCtx.putImageData(imageData, 0, 0);
        setEditedImage(newCanvas.toDataURL());
      }
    }
  };

  const handleCropInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCropDimensions((prev) => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
  };

  const handleRotateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rotationValue = parseInt(e.target.value, 10) || 0;
    setRotation(rotationValue);
    if (image) drawImageOnCanvas(image);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Image Editor</h1>

      {/* Choose File */}
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
          <canvas
            ref={canvasRef}
            width={500}
            height={400}
            className="border border-gray-300"
          />
        </div>
      )}

      {/* Rotation Input */}
      <div className="mb-4">
        <h2 className="text-lg mb-2">Rotate Image:</h2>
        <input
          type="number"
          value={rotation}
          onChange={handleRotateChange}
          className="border p-2 mr-2"
        />
        <span>Degrees</span>
      </div>

      {/* Crop Dimensions */}
      <div className="mb-4">
        <h2 className="text-lg mb-2">Crop Dimensions:</h2>
        <input
          type="number"
          name="x"
          placeholder="X"
          onChange={handleCropInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="y"
          placeholder="Y"
          onChange={handleCropInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="width"
          placeholder="Width"
          onChange={handleCropInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="height"
          placeholder="Height"
          onChange={handleCropInputChange}
          className="border p-2 mr-2"
        />
        <button
          onClick={cropImage}
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Crop Image
        </button>
      </div>

      {editedImage && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Edited Image:</h2>
          <img src={editedImage} alt="Edited" className="w-full max-h-64 object-cover" />
          <a
            href={editedImage}
            download="edited-image.png"
            className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded"
          >
            Download Edited Image
          </a>
        </div>
      )}
    </div>
  );
}
