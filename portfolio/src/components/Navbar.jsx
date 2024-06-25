import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='nav'>
      <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
        <ul className='nav__list'>
          {links.map(({ name, icon, path }, index) => (
            <li className='nav__item' key={index}>
              <NavLink
                to={path}
                className='nav__link'
                activeClassName='active-nav' // Use activeClassName for active class
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {icon}
                <h3 className='nav__name'>{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`nav__toggle ${showMenu ? 'animate-toggle' : ''}`}
        onClick={toggleMenu}
      >
        {/* Toggle icon */}
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
