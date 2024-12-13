import React from 'react';
import './style.css';

export default function Banner({ data }) {
    return (
        <div className='banner-container'>
            <div className="banner">
                {
                    data.cards.map((item, index) => (
                        <div className="banner-item">
                            <div className="banner-item-thumb">
                                <img src={item.image} about={item.text} />
                            </div>
                            <h1>{item.number}</h1>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}