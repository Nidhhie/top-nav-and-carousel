import React, { useState, useEffect, useRef, useCallback } from 'react';
import MoreMenu from './MoreMenu';
import SearchBar from './SearchBar';

const menuItems = [
  'Home', 'Electronics', 'Books', 'Music', 'Movies',
  'Clothing', 'Games', 'Furniture', 'Electronics', 'Travel',
  'Botanical', 'Category Name'
]

const TopNavigation: React.FC = () => {
 const [visibleItems, setVisibleItems] = useState<string[]>(menuItems);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const updateVisibleItems =  useCallback(() => {
    if (menuRef.current) {
      const menuWidth = menuRef.current.clientWidth;
      let totalWidth = 450;
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
  },[]);

  useEffect(() => {
    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, [updateVisibleItems]);

  return (
    <div className="top-navigation" ref={menuRef}>
      <div className="main-menu">
        <div className='menu-item logo bold'> E-COMM </div>
        {visibleItems.map((item, index) => (
          <div key={index} className="menu-item">{item.toUpperCase()}</div>
        ))}
        {menuItems.length > visibleItems.length && (
          <MoreMenu items={menuItems.slice(visibleItems.length)}/>
        )}
        <SearchBar/>
      </div>
    </div>
  );
}

export default TopNavigation;
