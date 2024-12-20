import React from 'react';
import Button from '../Button/button';
import './style.css';

export default function BigInput() {
    return (
        <div className='big_input'>
            <input className='newsletter_input' type='email' placeholder='Enter Mail Address Here...' />
            <div className="newsletter_btn">
                <Button text='Subcribe' link='/' type='simple' />
            </div>
        </div>
    )
}
