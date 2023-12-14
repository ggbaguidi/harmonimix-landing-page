
import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon='Group 2.png' title="For Live Music" description="Users can preview recommended songs directly on the landing page, adding a dynamic element to the experience."/>
        <Feature icon='music icon.png' title="For Daily Music" description=" A dynamic visualizer that reacts to the music playing, creating a captivating and immersive experience." />
        <Feature icon='Group 4.png' title="For Artist" description="A section where users can explore pre-made playlists curated around specific themes and moods."/>
      </div>
    </div>
  );
}

export default Experience;