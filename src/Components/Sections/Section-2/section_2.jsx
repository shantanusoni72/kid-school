import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

export default function Section_2() {
  return (<>
    <div className='section_2'>
      <div className="section_2_text">
        <label>Harmonious</label>
        <h2>Creative Learning Opportunity For Kids</h2>
        <p>
          Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.
        </p>
        <Button text='Creative Works' link="/" />
      </div>
      <div className="section_2_image">
        <img src='assets/kid-1.jpg' alt='kid-1' />
        <img src='assets/kid-2.jpg' alt='kid-2' />
      </div>
    </div>
    <img className='hands' src='assets/hand.png' alt='hands' />
  </>)
}
