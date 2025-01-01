import React from 'react';

interface HeaderProps {
  kiri?: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ kiri, title, action }) => {
  return (
    <div className="h-[80px] grid grid-cols-3 items-center">
      <div className="text-white text-start">{kiri}</div>
      <p className="text-white font-bold text-lg text-center">{title}</p>
      <div className="text-white text-end">{action}</div>
    </div>
  );
};

export default Header;
