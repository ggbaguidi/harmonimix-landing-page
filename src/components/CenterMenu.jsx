import React from 'react';
import { Link } from 'react-router-dom';

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer text-[1rem] no-underline";
  
  return (
    <div className="menu flex">
      <ul className='flex w-[100%] justify-between'>
        <li className={liStyle}><Link to="/">Home</Link></li>
        <li className={liStyle}><Link to="/about">About</Link></li>
        <li className={liStyle}><Link to="/contacts">Contacts</Link></li>
        <li className={liStyle}><a href="https://harmonimix.vercel.app/" rel="noopener noreferrer">HarmoniMix</a></li>
      </ul>
    </div>
  );
}

export default CenterMenu;
