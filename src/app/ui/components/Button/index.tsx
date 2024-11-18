import React from 'react';
import './style.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className }) => {
  return (
    <button data-testid='button-component' className={className || 'custom-button'} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
