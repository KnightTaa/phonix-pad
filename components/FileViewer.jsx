"use client";
import React from 'react';
import { useState } from "react";
import { FaFilePdf, FaImage, FaExternalLinkAlt } from "react-icons/fa";

const FileViewer = ({ fileUrl }) => {
  const [isImageOpen, setImageOpen] = useState(false);
  const isPdf = fileUrl.endsWith(".pdf");
  const isImage = /\.(jpeg|jpg|png|gif|webp)$/i.test(fileUrl);

  return (
    <div className="flex items-center gap-3 border p-4 rounded-lg shadow-md">
      {isPdf ? (
        <FaFilePdf className="text-black-500 text-2xl" />
      ) : isImage ? (
        <FaImage className="text-blue-500 text-2xl" />
      ) : null}

      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:underline"
      >
        View File <FaExternalLinkAlt />
      </a>

      {isImage && (
        <button
          onClick={() => setImageOpen(true)}
          className="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
        >
          Preview
        </button>
      )}

      {isImageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={() => setImageOpen(false)}
              className="absolute top-2 right-2 text-red-600 text-xl"
            >
              ✖
            </button>
            <img src={fileUrl} alt="Preview" className="max-w-full max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FileViewer;
