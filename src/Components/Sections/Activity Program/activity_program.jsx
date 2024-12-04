import React from 'react';
import Starter from '../../Utils/Starter/starter';
import './style.css';

export default function ActivityProgram() {
  return (
    <div className='activity_program'>
      <Starter
        starter='Activity Programs'
        heading='Smart Activities'
        paragraph='Forbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.'
        starter_image='assets/cap.svg'
        image_1={{ 'image': '', 'animationVisibility': false }}
        image_2={{ 'image': 'assets/rainbow.svg', 'lighterOpacity': false, 'rotation': '30deg' }}
        image_3=''
      />
    </div>
  )
}
