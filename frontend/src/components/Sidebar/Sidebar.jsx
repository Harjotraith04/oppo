import React from 'react';
import './sidebar.css';

const Sidebar = ({ setActiveComponent }) => {

    const [activeItem, setActiveItem] = React.useState(null); 

  const handleItemClick = (item) => {
    setActiveComponent(item);
    setActiveItem(item); 
  };


  return (
  
    <div className="sidebar  text-white  rounded-2xl w-15 h-100 mt-48 "> 
    <ul>
      <li 
        onClick={() => handleItemClick('DSA')} 
        className={activeItem === 'DSA' ? 'active' : '' }
      >
        DSA Sheet
      </li>  
      <li 
        onClick={() => handleItemClick('System')} 
        className={activeItem === 'System' ? 'active' : ''} 
      >
        System Design
      </li>  
      <li 
        onClick={() => handleItemClick('SDE')} 
        className={activeItem === 'SDE' ? 'active' : ''} 
      >
        SDE Core Sheet
      </li>  
    </ul>
  </div>
  )
}

export default Sidebar