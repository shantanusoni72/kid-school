import React from 'react';
import './style.css';

export default function Alarm({ data }) {
    return (
        <div className="alarm-container">
            <div className='alarm'>
                <div className='contact-alarm'>
                    <span className='phone'>
                        <img src='assets/phone.svg' alt='' />
                        <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                    </span>
                    <span className='email'>
                        <img src='assets/email.svg' alt='' />
                        <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                    </span>
                </div>
                <div className='social-alarm'>
                    <p>Follow Us :</p>
                    <span>
                        {
                            data.social.map((item, index) => (
                                <a href={item.link} key={index}><i class={item.id} aria-hidden='true'></i></a>
                            ))
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}