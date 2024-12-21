import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

export default function Intedu({ data }) {
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
                        <h1>{data.banner.label}</h1>
                        <h2>{data.banner.heading}</h2>
                        <p>{data.banner.paragraph}</p>
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