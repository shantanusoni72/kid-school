import React from 'react';
import Hero from '../../Sections/Hero/hero';
import About from '../../Sections/About/about';
import Section_2 from '../../Sections/Section-2/section_2';
import Programs from '../../Sections/Programs/programs';
import Intedu from '../../Sections/International Education/intedu';
import Garden from '../../Sections/Garden/garden';
import Facilities from '../../Sections/Facilities/facilities';
import Teachers from '../../Sections/Teachers/teachers';
import ActivityProgram from '../../Sections/Activity Program/activity_program';

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Programs />
      <Section_2 />
      <Garden />
      <Facilities />
      <Intedu />
      <Teachers />
      <div className="hc"></div>
      <ActivityProgram />
    </div>
  )
}
