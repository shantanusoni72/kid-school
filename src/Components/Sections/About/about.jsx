import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

export default function About() {
  return (
    <div className='about-container'>
      <div className='about'>
        <div className="about-image">
          <ellipse transform="matrix(0.9995 -3.077658e-02 3.077658e-02 0.9995 -2.054 17.9872)" class="img_path img_path_two" cx="583.3" cy="75.7" rx="74.8" ry="65.8"></ellipse>
          <img className='mask' src='assets/image_mask.png' alt='masking' />
          <img src='assets/about.jpg' alt='baby' />
        </div>
        <div className="about-text">
          <div className="about-row-2-text">
            <label>About Us</label>
            <h2>We Educate Knowledge & Essential Skills!</h2>
            <p>
              Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa.
            </p>
            <Button text='Read More' link='/' />
          </div>
          <div className="about-row-2-image">
            <img className='rocket' src='assets/rocket.svg' alt='rocket' />
            <img className='curl' src='assets/curl.svg' alt='curl' />
            <img className='child' src='assets/play-b.png' alt='child' />
          </div>
        </div>
      </div>
      <div className="about-row-2">
        <img className='line' src='assets/line.png' alt='line' />
      </div>
    </div>
  )
}
