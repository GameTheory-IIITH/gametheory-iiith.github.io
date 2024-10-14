import React from 'react';
import './button.css';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    // <div className="flex justify-center container">
      <button className="poker-button" onClick={onClick}>
        <span className="button-text">{text}</span>
      </button>
    // </div>
  );
};