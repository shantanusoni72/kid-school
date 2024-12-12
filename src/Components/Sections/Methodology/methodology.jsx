import React, { useState } from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

export default function Methodology() {
    const methodology = {
        cards: [
            {
                'age_group': '2-3',
                'headline': 'Infant',
                'color': '#4D4EFF',
                'link': '/',
                'image': 'assets/east_asian.jpg'
            },
            {
                'age_group': '4-6',
                'headline': 'Kindergarden',
                'color': '#F7941E',
                'link': '/',
                'image': 'assets/kids-2.jpg'
            },
            {
                'age_group': '7-8',
                'headline': 'Pre-Primary',
                'color': '#7CFFBE',
                'link': '/',
                'image': 'assets/kids-3.jpg'
            },
            {
                'age_group': '9-10',
                'headline': 'Primary',
                'color': '#61BFC9',
                'link': '/',
                'image': 'assets/kids-4.jpg'
            },
        ]
    }

    const [getMethodologyDotItem, setMethodologyDotItem] = useState(0);
    const [getImage, setImage] = useState('assets/east_asian.jpg');

    const handleEvents = (item, index) => {
        setImage(item.image);
        setMethodologyDotItem(index);
    }

    return (
    <div className='methodology'>
      <div className="methodology-row-1">
        <div className="methodology-row-1-col-1">
            <img src='assets/cap.svg' alt='cap' />
            <label>Active</label>
            <h1>Visual Teaching Methodology!</h1>
            <p>
            Morbi mauris augue, pulvinar quis luctus eget, pretium sed massa. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.
            </p>
            <Button text='Creative Works' link='/' type='small' />
        </div>
        <div className="methodology-row-1-col-2">
            <img src={getImage} alt='' />
            <div className="pause"></div>
        </div>
      </div>
      <div className="methodology-row-2">
        {
            methodology.cards.map((item, index) => (
                <a onClick={() => handleEvents(item, index)} className='methodology-row-2-card' key={index}>
                    <div style={{backgroundColor: `${item.color}`}} className={`hightlighted ${getMethodologyDotItem === index ? 'selected': ''}`}>
                        <h1>{item.age_group}</h1>
                        <p>Years</p>
                    </div>
                    <a className={`${getMethodologyDotItem === index ? 'selected': ''}`} href={item.link}>{item.headline}</a>
                </a>
            ))
        }
      </div>
    </div>
  )
}
