import React from 'react';
import './style.css';

export default function Starter(props) {
    return (
        <div className="starter-row-1">
            <div className={`starter-row-1-col-1 ${props.image_1.animationVisibility ? '' : 'disabled'}`}>
                <img src={props.image_1.image} alt='' />
            </div>
            <div className="starter-row-1-col-2">
                <img src={props.starter_image} alt='' />
                <h1>{props.starter}</h1>
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
            </div>
            <div className={`starter-row-1-col-3 ${props.image_2.lighterOpacity ? '' : 'solid'}`}
                style={{transform: `rotate(${props.image_2.rotation})`}}>
                <img src={props.image_2.image} alt='' />
                <img src={props.image_3} alt='' />
            </div>
        </div>
    )
}