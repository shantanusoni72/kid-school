import React from 'react';
import './style.css';

export default function Button(props) {
    return (
        <div className="button-container">
            <div className={`button ${props.type === 'white' ? 'white' : props.type === 'simple' ? 'simple' : ''}`}>
                <a href='#'>{props.text}</a>
            </div>
        </div>
    )
}