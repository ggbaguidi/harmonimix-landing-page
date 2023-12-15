import React from 'react';
import Feature from './Feature';

const FeaturesSection = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[90rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
    <h3 className="text-3xl font-bold mb-8">Embrace the Unexpected</h3>
    <section id="features" >
        <div className="feature-card">
        <Feature icon="musical-notes.svg" title="Unleash Your Inner Soundtrack" description='HarmoniMix analyzes your musical preferences and crafts a personalized sonic tapestry that reflects your unique taste.'/>
        </div>
        <div className="feature-card">
          <Feature icon="compass.svg" title="Explore Uncharted Genres" description='Discover hidden gems and rising stars across diverse musical landscapes, expanding your horizons beyond your usual playlist.'/>
        </div>
        <div className="feature-card">
          <Feature icon="sunrise-sunset.svg" title="Mood-Matching Magic" description="Whether you're craving energy or seeking tranquility, HarmoniMix curates the perfect soundtrack for every moment."/>
        </div>
        <div className="feature-card">
          <Feature icon="connected-people.svg" title="Share the Symphony" description="Build meaningful bonds with friends and family through the shared language of music, creating lasting memories." />
        </div>
    </section>
    </div>
  );
};

export default FeaturesSection;
