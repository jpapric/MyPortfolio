import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
import '../css/Toggle.css';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [toggled, setToggled] = useState(false);

  return (
   <div className='toggle-container'>
      <button 
        className={`toggleBtn ${toggled ? 'toggled' : ''}`} 
        onClick={() => setToggled(!toggled)} 
      >
      <div className='toggle' onClick={toggleTheme}></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
