import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

export default function About() {
  return (
    <div className='about-container'>
      <div className='about'>
        <div className="about-image">
          <img className='starMourning' src='assets/star.svg' alt='star' />
          <img className='mask' src='assets/heart.svg' alt='masking' />
          <img className='baby_img' src='assets/about.jpg' alt='baby' />
        </div>
        <div className="about-text">
          <div className="about-row-2-text">
            {/* <img src='assets/cap.svg' alt='cap' /> */}
            <label>About Us</label>
            <h2>We Educate Knowledge & Essential Skills!</h2>
            <p>
              Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa.
            </p>
            <Button text='Read More' link='/' type='small' />
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
