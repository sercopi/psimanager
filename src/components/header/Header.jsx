import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActiveMenu = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.target !== event.currentTarget) {
      return false;
    }
    setActiveMenu(!activeMenu);
  };

  return (
    <nav id="navigation">
      <div className="icons">
        <div className="menu-icon">
          <i
            className={activeMenu ? 'fa fa-times' : 'fa fa-bars'}
            onClick={handleActiveMenu}
          ></i>
        </div>
        <div className="logo">
          <Link rel="stylesheet" to="/">
            <span>Prueba</span> <i className="fa fa-home"></i>
          </Link>
        </div>
      </div>

      <div
        className={activeMenu ? 'menu active' : 'menu'}
        onClick={handleActiveMenu}
      >
        <div className="menu-container"></div>
      </div>
    </nav>
  );
}

export default Header;
