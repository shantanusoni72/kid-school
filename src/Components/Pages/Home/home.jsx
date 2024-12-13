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
import Blog from '../../Sections/Blog/blog';
import Methodology from '../../Sections/Methodology/methodology';
import Newsletter from '../../Sections/Newsletter/newsletter';
import Testimonial from '../../Sections/Testimonial/testimonial';
import Banner from '../../Sections/Banner/banner';

export default function Home({ home_page_content }) {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Programs data={home_page_content.home_page.program_section} />
      <Section_2 />
      <Facilities data={home_page_content.home_page.facilities_section} />
      <Banner data={home_page_content.home_page.banner_section} />
      <Intedu />
      <Garden />
      <Teachers data={home_page_content.home_page.teachers_section} />
      <div className="hc"></div>
      <ActivityProgram data={home_page_content.home_page.activity_program_section} />
      <Blog />
      <Methodology />
      <Testimonial data={home_page_content.home_page.testimonial_section} />
      <Newsletter />
    </div>
  )
}
