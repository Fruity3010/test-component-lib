import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
};
