import React, { useState, useEffect, useRef, useCallback } from 'react';
import MoreMenu from './MoreMenu';

const menuItems = [
  'Home', 'About', 'Services', 'Portfolio', 'Contact',
  'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
  'Item 11', 'Item 12', 'Item 13'
]

const TopNavigation: React.FC = () => {
 const [visibleItems, setVisibleItems] = useState<string[]>(menuItems);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const updateVisibleItems =  useCallback(() => {
    if (menuRef.current) {
      const menuWidth = menuRef.current.clientWidth;
      let totalWidth = 140;
      let newVisibleItems: string[] = [];

      for (let i = 0; i < menuItems.length; i++) {

        const itemWidth = menuRef.current
          .querySelector(`.menu-item:nth-child(${i + 1})`)?.clientWidth || 0;

          if (totalWidth + itemWidth <= menuWidth) {
          newVisibleItems.push(menuItems[i]);
          totalWidth += itemWidth;
        } else {
          break;
        }
      }

      setVisibleItems(newVisibleItems); 
    }
  },[menuItems]);

  useEffect(() => {
    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, [menuItems, updateVisibleItems]);

  return (
    <div className="top-navigation" ref={menuRef}>
      <div className="main-menu">
        {visibleItems.map((item, index) => (
          <div key={index} className="menu-item">{item}</div>
        ))}
        {menuItems.length > visibleItems.length && (
          <MoreMenu items={menuItems.slice(visibleItems.length)}/>
        )}
      </div>
    </div>
  );
}

export default TopNavigation;
