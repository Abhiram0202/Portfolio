'use client';

import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer({ width }) {
  return (
    <Document
      file="/ResumeAB.pdf"
      className="flex justify-center"
      loading={
        <div className="p-20 text-black font-medium">Loading Resume...</div>
      }
      error={
        <div className="p-20 text-red-500 bg-white">
          Failed to load resume. Ensure ResumeAB.pdf exists in public folder.
        </div>
      }
    >
      <Page 
        pageNumber={1} 
        width={width} 
        renderAnnotationLayer={false} 
        renderTextLayer={false}
      />
    </Document>
  );
}
