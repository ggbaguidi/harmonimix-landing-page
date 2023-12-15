import React from 'react';
import YouTube from 'react-youtube';

const VideoSection = () => {
    const videoOptions = {
        height: '500', // Adjust the height as needed
        width: '800', // Adjust the width as needed
        playerVars: {
          autoplay: 0,
        },
    };

  const videoId = 'eUAd5f936Yg'; // Replace with your actual YouTube video ID

  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] pt-[10rem] mt-[-5rem] relative z-[1]">
    <img src={require("../img/Mask Group 23.png")} alt="" className="w-[5rem]"/>
    {/* heading */}
    <div className="headline mt-7 flex flex-col items-center text-[2rem]">
    <span> Project Overview Video </span>   
    </div>
    <YouTube videoId={videoId} opts={videoOptions} />
    </div>
  );
};

export default VideoSection;
