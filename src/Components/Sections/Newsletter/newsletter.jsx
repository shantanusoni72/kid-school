import React from 'react';
import Starter from '../../Utils/Starter/starter';
import './style.css';
import BigInput from '../../Utils/BigInput/big_input';

export default function Newsletter() {
    return (
        <div className='newsletter'>
            <Starter
                starter='News Letter'
                heading='Subscribe To Get the Latest News About us'
                paragraph='Horbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.'
                starter_image=''
                wider={true}
                container_1={
                    <div className='div_1'>
                        <img className='stars' src='assets/stars.svg' alt='stars' />
                        <img className='nl_planet_1' src='assets/planet.svg' alt='planet_1' />
                    </div>
                }
                container_2={
                    <div className="ufo-outer">
                        <img className='ufo_img' src='assets/ufo.svg' alt='ufo' />
                    </div>
                }
            />
            <BigInput />
        </div>
    )
}
