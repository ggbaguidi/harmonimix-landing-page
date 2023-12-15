import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer text-[1rem] no-underline"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}><a href="harmonimix-landing-page" rel="noopener noreferrer">Home</a></li>
            <li className={liStyle}><a href="about" rel="noopener noreferrer">About</a></li>
            <li className={liStyle}><a href="contacts" rel="noopener noreferrer">Contacts</a></li>
            <li className={liStyle}><a href="https://harmonimix.vercel.app/" rel="noopener noreferrer">HarmoniMix</a></li>
        </ul>
    </div>
  )
}

export default CenterMenu