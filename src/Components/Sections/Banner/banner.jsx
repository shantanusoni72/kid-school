import React from 'react';
import './style.css';

export default function Banner() {
    const banner = {
        cards: [
            {
                'image': 'assets/calculator.svg',
                'number': '3564+',
                'text': 'Students Admission'
            },
            {
                'image': 'assets/book_guy.svg',
                'number': '156+',
                'text': 'Total No.of Class'
            },
            {
                'image': 'assets/pouch_guy.svg',
                'number': '75+',
                'text': 'No.of Teachers'
            },
            {
                'image': 'assets/canyon.svg',
                'number': '8+',
                'text': 'Years Experience'
            },
        ]
    }

    return (
        <div className='banner-container'>
            <div className="banner">
                {
                    banner.cards.map((item, index) => (
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