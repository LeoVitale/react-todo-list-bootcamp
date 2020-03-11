import React from 'react';
import './styles.css';

const TextInput = ({ label, ...props }) => {
  return (
    <div className="text-input-container">
      <p className="text-input-label">{label}</p>
      <input {...props} className="text-input" />
    </div>
  );
};

export default TextInput;
