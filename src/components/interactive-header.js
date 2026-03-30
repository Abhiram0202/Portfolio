'use client';
import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';

const styles = {
  header: {
    backgroundColor: '#1a1a1a',
    padding: '25px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,255,255,0.1)',
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  location: {
    color: '#aaa',
    fontSize: '1rem',
    width: '100%',
    marginBottom: '15px',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1rem',
    transition: 'color 0.2s',
  },
  separator: {
    color: '#555',
    fontSize: '1.2rem',
    margin: '0 10px',
  },
};

// Add a hover effect to be injected into the document head
const hoverStyle = `
  .interactive-link:hover {
    color: #FFD700 !important; /* Bright yellow hover */
  }
`;

const InteractiveHeader = () => {
  return (
    <div style={styles.header}>
      <style>{hoverStyle}</style> {/* Inject hover style */}

      <div style={styles.location}>Warangal, India</div>

      <a href="tel:+917013521029" style={styles.link} className="interactive-link">
        <FaPhone /> +91 7013521029
      </a>
      <span style={styles.separator}>|</span>
      <a href="mailto:abhiy9164@gmail.com" style={styles.link} className="interactive-link">
        <FaEnvelope /> abhiy9164@gmail.com
      </a>
      <span style={styles.separator}>|</span>
      <a href="https://abhiramyadav.vercel.app" target="_blank" rel="noopener noreferrer" style={styles.link} className="interactive-link">
        <FaGlobe /> abhiramyadav.vercel.app
      </a>
      <span style={styles.separator}>|</span>
      <a href="https://github.com/abhiram0202" target="_blank" rel="noopener noreferrer" style={styles.link} className="interactive-link">
        <FaGithub /> abhiram0202
      </a>
      <span style={styles.separator}>|</span>
      <a href="https://linkedin.com/in/abhiramyadav02" target="_blank" rel="noopener noreferrer" style={styles.link} className="interactive-link">
        <FaLinkedin /> abhiramyadav02
      </a>
    </div>
  );
};

export default InteractiveHeader;
