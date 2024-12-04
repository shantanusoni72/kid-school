import React from 'react';
import './style.css';

export default function Button(props) {
    return (
        <div className={`button ${props.type === 'small' ? 'small' : ''}`}>
            <a href={props.link}>{props.text}</a>
        </div>
    )
}