"use client";
import { useState } from "react";
import axios from "axios";

const YourComponent: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      const response = await axios.post(
        "/api/generatepdf", // Adjust the endpoint name if necessary
        {
          password: "2434",
          text: text,
        },
        {
          responseType: "blob", // Expect a file in response
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "processed-text.pdf"); // Adjust the filename if needed
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error processing the text:", error);
    }
  };

  return (
    <div>
      <h1>Text Input and PDF Download</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
        rows={10}
        cols={50}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      />
      <button onClick={handleSubmit} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Process Text
      </button>
    </div>
  );
};

export default YourComponent;
