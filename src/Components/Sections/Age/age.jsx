import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

export default function Age() {
    return (
        <div className='age'>
            <div className="age-text">
                <label>Active</label>
                <h2>Visual Teaching Methodology!</h2>
                <p>
                    Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.
                </p>
                <Button text='Creative Works' link="/" />
            </div>
            <div className="age-media">
                <video>
                    
                </video>
            </div>
        </div>
    )
}
