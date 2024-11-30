"use client";
import React, { useState, useEffect, useRef } from "react";
import Tesseract from "tesseract.js";
import dragDrop from "drag-drop";
import axios from "axios";

const OCRAppWithDragDrop: React.FC = () => {
  const [image, setImage] = useState<string | null>(null); // Image as Base64
  const [text, setText] = useState<string>(""); // Recognized text
  const [progress, setProgress] = useState<number>(0); // Progress percentage
  const dropZoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dropZoneRef.current) {
      dragDrop(dropZoneRef.current, (files) => {
        const file = files[0];
        if (file) {
          handleFileUpload(file);
        }
      });
    }
  }, []);

  // Handle file upload (both drag-and-drop and file input)
  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string); // Convert to Base64
    reader.readAsDataURL(file);
  };

  // Handle click-based file upload
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // Perform OCR
  const performOCR = () => {
    if (!image) {
      alert("Please drag or upload an image first!");
      return;
    }

    Tesseract.recognize(image, "eng", {
      logger: (info) => {
        if (info.status === "recognizing text") {
          setProgress(Math.floor(info.progress * 100));
        }
      },
    })
      .then(({ data: { text } }) => {
        setText(text); // Set recognized text
      })
      .catch((err) => {
        console.error("OCR Error:", err);
      })
      .finally(() => {
        setProgress(0); // Reset progress
      });
  };

  // Copy text to clipboard
  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } else {
      alert("No text to copy!");
    }
  };

  return (
    <div className="px-64 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-center">
        Drag and Drop a file or Click to Upload
      </h1>

      {/* Drag-and-Drop Area */}
      <div
        ref={dropZoneRef}
        className="text-center cursor-pointer "
      >
        <p className="text-md text-gray-700">File Type: PDF, JPG, PNG, GIF</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
          Click here to upload a file
        </label>
      </div>

      {/* Image Preview */}
      {/* {image && (
        <div className="mt-4">
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-auto border border-gray-300 rounded"
          />
        </div>
      )} */}

      {/* Language Selection */}
      <label
        htmlFor="language"
        className="block mb-2 text-sm font-bold text-gray-900 mt-4"
      >
        OCR Language
      </label>
      <select
        id="language"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
      >
        <option value="eng">English</option>
        <option value="chi_sim">Chinese</option>
        <option value="hin">Hindi</option>
        <option value="fra">French</option>
        <option value="deu">German</option>
      </select>

      {/* Start Scan Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={performOCR}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Start Scan
        </button>
      </div>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="mt-4">
          <p>Progress: {progress}%</p>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-blue-500"
            ></div>
          </div>
        </div>
      )}

      {/* Recognized Text */}
      <h1 className="font-bold mt-6">Preview</h1>
      <h3 className="text-gray-600">
        The extracted text will appear here after the scan is complete
      </h3>
      <div className="flex justify-between mt-4">
        <div className="w-[85%] overflow-hidden p-4 rounded">{text}</div>
        <div className="flex flex-col gap-4 w-[15%]">
          <button
            className="bg-gray-200 text-sm font-bold px-3 py-2 rounded-md"
            onClick={copyToClipboard}
          >
            Copy Text
          </button>
          <button className="bg-gray-200 text-sm font-bold px-3 py-2 rounded-md">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default OCRAppWithDragDrop;


