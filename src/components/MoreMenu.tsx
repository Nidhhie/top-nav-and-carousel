import React, { useState } from 'react';

const MoreMenu: React.FC<{ items: string[] }> = ({ items }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState<boolean>(false);
 
  return (
    <div className="menu-item dropdown">
      <span onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}>MORE</span>
      {isMoreMenuOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <div key={index} className="menu-item">{item.toUpperCase()}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MoreMenu;
