'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import InteractiveHeader from '@/components/interactive-header';

const ResumeViewer = dynamic(() => import('@/components/resume-viewer'), {
  ssr: false,
  loading: () => <div className="p-20 text-white font-medium">Preparing Viewer...</div>
});

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
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
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

      {/* Interactive Header */}
      <InteractiveHeader />

      {/* Large Resume Preview */}
      <div style={styles.resumeWrapper}>
        <ResumeViewer width={width} />
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
