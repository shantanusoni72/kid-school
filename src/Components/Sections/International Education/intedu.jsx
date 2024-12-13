import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

export default function Intedu() {
    // const intedu = {
    //     cards: [
    //         'assets/g1.jpg',
    //         'assets/g2.jpg',
    //         'assets/g3.jpg',
    //         'assets/g4.jpg',
    //         'assets/g5.jpg',
    //         'assets/g6.jpg'
    //     ]
    // }

    return (
        <div className='intedu-container'>
            <div className="intedu-row-1">
                <div className="intedu-row-1-col-1">
                    <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                        <img className='rotating_img' src='assets/rotating.svg' alt='rotating' />
                        <img className='house_img' src='assets/house.svg' alt='house' />
                    </ScrollAnimation>
                </div>
                <div className='intedu-row-1-col-2'>
                    <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
                        <img src='assets/cap.svg' alt='' />
                        <h1>International Education</h1>
                        <h2>Bicultural Students</h2>
                        <p>Semper cras auctor neque vitae tempus quam pellentesque nec nam. Egestas sed sed risus pretium quam vulputate dignissim. At lectus urna duis convallis convallis tellus id. Diam in arcu cursus euismod.</p>
                    </ScrollAnimation>
                </div>
                <div className="intedu-row-1-col-3">
                    <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                        <img className='sketch_rocket_img' src='assets/drawn-rocket.svg' alt='sketch_rocket' />
                    </ScrollAnimation>
                </div>
            </div>
            {/* <div class="grid-container">
                <div class="grid-item g1">
                <img src={intedu.cards[0]} />
                </div>
                <div class="grid-item g2">
                <img src={intedu.cards[1]} />
                </div>
                <div class="grid-item g3">
                <img src={intedu.cards[2]} />
                </div>
                <div class="grid-item g4">
                <img src={intedu.cards[3]} />
                </div>
                <div class="grid-item g5">
                <img src={intedu.cards[4]} />
                </div>
                <div class="grid-item g6">
                <img src={intedu.cards[5]} />
                </div>
            </div> */}
        </div>
    )
}
