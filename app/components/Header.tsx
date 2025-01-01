import React from 'react';

interface HeaderProps {
  kiri?: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ kiri, title, action }) => {
  return (
    <div className="h-[80px] flex items-center justify-between px-2 bg-gray-900">
      <div className="text-white">{kiri}</div>
      <p className="text-white font-bold text-lg">{title}</p>
      <div className="text-white">{action}</div>
    </div>
  );
};

export default Header;
