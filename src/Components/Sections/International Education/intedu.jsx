import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

export default function Intedu() {
    const intedu = {
        cards: [
            'assets/g1.jpg',
            'assets/g2.jpg',
            'assets/g3.jpg',
            'assets/g4.jpg',
            'assets/g5.jpg',
            'assets/g6.jpg'
        ]
    }

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
            <div className="flex-container">
                <div className="flex-row-1-col-1">
                    <div className="inner">
                        <img src='assets/g1.jpg' alt='' />
                    </div>
                </div>
                <div className="flex-row-1-col-2">
                    <div className="flex-row-1-col-2-part-1">
                        <div className="inner">
                            <img src='assets/g2.jpg' alt='' />
                        </div>
                        <div className="inner">
                            <img src='assets/g3.jpg' alt='' />
                        </div>
                    </div>
                    <div className="flex-row-1-col-2-part-2">
                        <div className="inner">
                            <img src='assets/g4.jpg' alt='' />
                        </div>
                    </div>
                </div>
                <div className="flex-row-1-col-3">
                    <div className="flex-row-1-col-3-part-1">
                        <div className="inner">
                            <img src='assets/g5.jpg' alt='' />
                        </div>
                    </div>
                    <div className="flex-row-1-col-3-part-2">
                        <div className="inner">
                            <img src='assets/g6.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
