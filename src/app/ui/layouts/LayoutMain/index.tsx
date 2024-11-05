import React from 'react';
import './style.scss';

const LayoutMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout-main">
      {children}
    </div>
  );
};

export default LayoutMain;
