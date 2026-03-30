'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const styles = {
  container: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: '40px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 28px',
    backgroundColor: '#C084FC',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'transform 0.2s, background-color 0.2s',
    boxShadow: '0 4px 15px rgba(192, 132, 252, 0.3)',
  },
  resumeWrapper: {
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'white',
  },
};

function ResumePage() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      // Scale resume based on window width
      const newWidth = window.innerWidth > 900 ? 850 : window.innerWidth - 60;
      setWidth(newWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* Top Download Button */}
      <a 
        href="/ResumeAB.pdf" 
        download="ResumeAB.pdf" 
        style={styles.button}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <AiOutlineDownload style={{ marginRight: '8px', fontSize: '1.2rem' }} />
        Download CV
      </a>

      {/* Large Resume Preview using react-pdf to avoid scrollbars */}
      <div style={styles.resumeWrapper}>
        <Document
          file="/ResumeAB.pdf"
          className="flex justify-center"
          loading={
            <div className="p-20 text-black font-medium">Loading Resume...</div>
          }
          error={
            <div className="p-20 text-red-500">Failed to load resume. Ensure ResumeAB.pdf exists in public folder.</div>
          }
        >
          <Page 
            pageNumber={1} 
            width={width} 
            renderAnnotationLayer={false} 
            renderTextLayer={false}
          />
        </Document>
      </div>

      {/* Bottom Download Button */}
      <a 
        href="/ResumeAB.pdf" 
        download="ResumeAB.pdf" 
        style={styles.button}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <AiOutlineDownload style={{ marginRight: '8px', fontSize: '1.2rem' }} />
        Download CV
      </a>
    </div>
  );
}

export default ResumePage;
