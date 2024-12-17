import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';
import BigInput from '../../Utils/BigInput/big_input';

export default function Newsletter() {
    return (
        <div className='newsletter'>
            <div className="newsletter-row-1">
                <div className="newsletter-row-1-col-2">
                    <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
                        <h1>News Letter</h1>
                        <h2>Subscribe To Get the Latest News About us</h2>
                        <p>Horbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.</p>
                    </ScrollAnimation>
                </div>
            </div>
            <BigInput />
        </div>
    )
}
