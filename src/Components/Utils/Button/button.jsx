import React from 'react';
import './style.css';

export default function Button(props) {
    return (
        <div className={`button ${props.type === 'small' ? 'small' : props.type === 'big_long' ? 'big_long' : ''}`}>
            <a href={props.link}>{props.text}</a>
        </div>
    )
}