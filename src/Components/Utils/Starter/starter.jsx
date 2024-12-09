import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

export default function Starter(props) {
    return (
        <div className="starter-row-1">
            <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                    {props.container_1}
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
                <div className={`starter-row-1-col-2 ${props.wider ? 'wide' : ''}`}>
                    <img src={props.starter_image} alt='' />
                    <h1>{props.starter}</h1>
                    <h2>{props.heading}</h2>
                    <p>{props.paragraph}</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                <div className="starter-row-1-col-3">
                    {props.container_2}
                </div>
            </ScrollAnimation>
        </div>
    )
}