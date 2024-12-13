import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Section_2() {
  return (<>
    <div className='section_2'>
      <div className="section_2_text">
        <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
          <span>
            <label>Harmonious</label>
          </span>
          <h2>Creative Learning Opportunity For Kids</h2>
          <p>
            Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.
          </p>
          <div className="button-text">
            <Button text='Creative Works' link="/" type='small' />
          </div>
        </ScrollAnimation>
      </div>
      <div className="section_2_image">
        <ScrollAnimation animateIn='bounceInLeft' animateOnce={true}>
          <img src='assets/kid-1.jpg' alt='kid-1' />
        </ScrollAnimation >
        <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
          <img src='assets/kid-2.jpg' alt='kid-2' />
        </ScrollAnimation>
      </div>
    </div>
    <img className='hands' src='assets/hand.png' alt='hands' />
  </>)
}
