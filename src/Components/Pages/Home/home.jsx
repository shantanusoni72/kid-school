import React from 'react';
import Hero from '../../Sections/Hero/hero';
import About from '../../Sections/About/about';
import Section_2 from '../../Sections/Section-2/section_2';
import Programs from '../../Sections/Programs/programs';
import Garden from '../../Sections/Garden/garden';

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Programs />
      <Section_2 />
      <Garden />
    </div>
  )
}
