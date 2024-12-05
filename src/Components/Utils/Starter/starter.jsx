import React from 'react';
import './style.css';

export default function Starter(props) {
    return (
        <div className="starter-row-1">
            <div className="starter-row-1-col-1">
                {props.container_1}
            </div>
            <div className="starter-row-1-col-2">
                <img src={props.starter_image} alt='' />
                <h1>{props.starter}</h1>
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
            </div>
            <div className="starter-row-1-col-3">
                {props.container_2}
            </div>
        </div>
    )
}