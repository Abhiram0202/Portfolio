'use client';
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

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
  iframeContainer: {
    width: '100%',
    maxWidth: '1000px',
    height: '1100px',
    margin: '40px auto',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

function ResumePage() {
  // Parameters to hide toolbar/scrollbar in supported browsers
  const pdfUrl = '/ResumeAB.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0';

  return (
    <div style={styles.container}>
      {/* Top Download Button */}
      <a 
        href={'/ResumeAB.pdf'} 
        download="ResumeAB.pdf" 
        style={styles.button}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <AiOutlineDownload style={{ marginRight: '8px', fontSize: '1.2rem' }} />
        Download CV
      </a>

      {/* Large Resume Preview */}
      <div style={styles.iframeContainer}>
        <iframe 
          src={pdfUrl} 
          title="Resume PDF" 
          style={styles.iframe} 
        />
      </div>

      {/* Bottom Download Button */}
      <a 
        href={'/ResumeAB.pdf'} 
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
