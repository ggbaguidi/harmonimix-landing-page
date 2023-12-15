import React from 'react';

const AboutSection = () => {
  return (
    <div className="wrapper flex items-center bg-[#020917] justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[90rem] relative z-[4]">
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h2 className='text-[3rem] text-center'>About HarmoniMix</h2>
          <p className='w-[75%] text-[1.5rem] text-center m-[auto] p-[10px] text-justify'>
            HarmoniMix is more than just a project; it's a journey inspired by my passion for music and the desire to enhance the music discovery experience for enthusiasts worldwide.
          </p>
          <p className='w-[75%] text-[1.5rem] text-center m-[auto] p-[10px] text-justify'>
          The idea for HarmoniMix was born during a late-night coding session fueled by a diverse playlist. As I explored different genres and discovered hidden gems, it struck me how powerful music is in shaping our moods and experiences. That moment sparked the vision for HarmoniMix, evolving it into a comprehensive music recommendation system dedicated to making your music exploration a uniquely personalized journey.
          </p>
          <p className='w-[75%] text-center m-[auto] p-[10px] text-justify'>
            This project is part of my journey at ALX Software Engineering, a testament to my dedication to mastering the craft of software development.
          </p>
          <p className='w-[75%] text-center m-[auto] p-[10px] text-justify'>
            <strong>Portfolio Project:</strong> This project is a Portfolio Project for ALX Software Engineering School. You can find more about ALX Software Engineering on their <a href="[ALX's Website URL]" target="_blank" rel="noopener noreferrer">website</a>.
          </p>
          <div className='flex justify-center'>
          <div className="w-[75%] text-center m-[auto] p-[10px] text-justify text-[1.5rem]">
            <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
            <h3 className='text-[2rem] p-[10px]'>Meet the Team</h3>
              {/* my picture */}
                <img
                  src={require(`../img/Guy_A_GBAGUIDI.jpg`)}
                  alt=""
                  className="w-[20rem]"
                />
              <span className="mt-5">Software Engineer | Data Engineer</span>
            </div>
            <ul className='flex justify-center'>
              <li className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer p-[20px]"><a href="https://www.linkedin.com/in/guy-ahonakpon-gbaguidi" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer p-[20px]"><a href="https://web.facebook.com/g.a.gbaguidi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer p-[20px]"><a href="https://twitter.com/GuyGbaguidi" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
          <div className="w-[75%] text-center m-[auto] p-[10px] text-justify text-[1.5rem]">
            <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
            <h3 className='text-[2rem]'>GitHub Repository</h3>
              {/* logo */}
                <img
                  src={require(`../img/logo.png`)}
                  alt=""
                />
              <p >Explore our codebase on GitHub: <a href="https://github.com/ggbaguidi/HarmoniMix.git" target="_blank" rel="noopener noreferrer" className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer mt-5">HarmoniMix Repository</a></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutSection;
