import React, { useState } from 'react';
import './style.css';

export default function Header() {
    const [getMenuItem, setMenuItem] = useState(1);

    const toggleOverItem = (index) => {
        const item = document.querySelectorAll('.header-menu ul li img');
        for (var i = 0; i < item.length; i++) {
            if (index === i + 1) {
                item[i].classList.add('show');
            } else {
                item[i].classList.remove('show');
            }
        }
    }

    const toggleOutItem = () => {
        const item = document.querySelectorAll('.header-menu ul li img');
        for (var i = 0; i < item.length; i++) {
            item[i].classList.remove('show');
        }
    }

    return (
        <div className='header'>
            <div className='header-logo'>
                <img src='assets/logo.png' />
            </div>
            <div className='header-menu'>
                <ul>
                    <li onMouseOver={() => toggleOverItem(1)} onClick={() => setMenuItem(1)}>
                        {getMenuItem === 1 ? <img src='assets/menu-hover-icon.png' alt='cayon' /> : null}
                        {getMenuItem === 1 ? <a href='#' style={{ color: 'var(--gold)' }}>Home</a> : <a href='#'>Home</a>}
                    </li>
                    <li onMouseOver={() => toggleOverItem(2)} onClick={() => setMenuItem(2)}>
                        {getMenuItem === 2 ? <img src='assets/menu-hover-icon.png' alt='cayon' /> : null}
                        {getMenuItem === 2 ? <a href='#' style={{ color: 'var(--gold)' }}>LMS Pages</a> : <a href='#'>LMS Pages</a>}
                    </li>
                    <li onMouseOver={() => toggleOverItem(3)} onMouseOut={toggleOutItem}>
                        <img src='assets/menu-hover-icon.png' alt='cayon' />
                        <a href='#'>Facilities</a>
                    </li>
                    <li onMouseOver={() => toggleOverItem(4)} onMouseOut={toggleOutItem}>
                        <img src='assets/menu-hover-icon.png' alt='cayon' />
                        <a href='#'>Articles</a>
                    </li>
                    <li onMouseOver={() => toggleOverItem(5)} onMouseOut={toggleOutItem}>
                        <img src='assets/menu-hover-icon.png' alt='cayon' />
                        <a href='#'>Pages</a>
                    </li>
                    <li onMouseOver={() => toggleOverItem(6)} onMouseOut={toggleOutItem}>
                        <img src='assets/menu-hover-icon.png' alt='cayon' />
                        <a href='#'>Ask Us</a>
                    </li>
                </ul>
            </div>
            <div className='header-end'>
                <a href='#'>
                    <i class='fa fa-search' aria-hidden='true'></i>
                </a>
                <a href='#'>
                    <i class='fa fa-shopping-cart' aria-hidden='true'></i>
                </a>
            </div>
        </div>
    )
}
