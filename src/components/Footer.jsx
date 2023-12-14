import React from 'react';
import CenterMenu from './CenterMenu';
import {Facebook, Twitter, YouTube, LinkedIn} from "@mui/icons-material";

function Footer() {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        <CenterMenu/>
        {/* Social Icons */}
        <div className="flex w-[100%] justify-center mt-14">
            <div className={SocialStyle}>
            <a href="https://web.facebook.com/g.a.gbaguidi">
              <Facebook/>
              </a>
            </div>
            <div className={SocialStyle}>
              <Twitter/>
            </div>
            <div className={SocialStyle}>
              <YouTube/>
            </div>
            <div className={SocialStyle}>
              <LinkedIn/>
            </div>
        </div>
      {/* details */}
      
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
         &copy; HarmoniMix 2023
        </span>
      
    </div>
  )
}

export default Footer