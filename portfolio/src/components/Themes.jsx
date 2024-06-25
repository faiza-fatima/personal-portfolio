// Themes.jsx
import React from 'react';
import { FaCog } from 'react-icons/fa';
import { BsMoon } from 'react-icons/bs';
import './themes.css';
import ThemeItem from './ThemeItem';


const themes = [
  { color: 'blue', img: '/path/to/blue-theme-img.jpg' },
  { color: 'green', img: '/path/to/green-theme-img.jpg' },
  { color: 'red', img: '/path/to/red-theme-img.jpg' },
  { color: 'purple', img: '/path/to/purple-theme-img.jpg' },
  { color: 'orange', img: '/path/to/orange-theme-img.jpg' }
];

const Themes = () => {
  return (
    <div className='style__switcher'>
      <div className='style__switcher-toggler'>
        <FaCog />
      </div>
      <div className='theme__toggler'>
        <BsMoon />
      </div>
      <h3 className='style__switcher-title'>Style Switcher</h3>
      <div className='style__switcher-items'>
        {themes.map((theme, index) => (
          <ThemeItem key={index} img={theme.img} />
        ))}
      </div>
      <div className='style__switcher-close'>&times;</div>
    </div>
  );
};

export default Themes;
