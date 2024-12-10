import React, { useState } from 'react';
import './style.css';

export default function Header() {
    const [getMenuItem, setMenuItem] = useState(1);
    const [getMenuItemOnMobile, setMenuItemOnMobile] = useState(1);

    return (<>
        <div className='header'>
            <div className='header-logo'>
                <img src='assets/logo.png' />
            </div>
            <div className='header-menu'>
                <ul>
                    <li onClick={() => setMenuItem(1)} className={`header-menu-anchor ${getMenuItem === 1 ? 'selected' : ''}`}>
                        <a href='#'><span>Home</span></a>
                    </li>
                    <li onClick={() => setMenuItem(2)} className={`header-menu-anchor ${getMenuItem === 2 ? 'selected' : ''}`}>
                        <a href='#'><span>LMS Pages</span></a>
                    </li>
                    <li onClick={() => setMenuItem(3)} className={`header-menu-anchor ${getMenuItem === 3 ? 'selected' : ''}`}>
                        <a href='#'><span>Facilities</span></a>
                    </li>
                    <li onClick={() => setMenuItem(4)} className={`header-menu-anchor ${getMenuItem === 4 ? 'selected' : ''}`}>
                        <a href='#'><span>Articles</span></a>
                    </li>
                    <li onClick={() => setMenuItem(5)} className={`header-menu-anchor ${getMenuItem === 5 ? 'selected' : ''}`}>
                        <a href='#'><span>Pages</span></a>
                    </li>
                    <li onClick={() => setMenuItem(6)} className={`header-menu-anchor ${getMenuItem === 6 ? 'selected' : ''}`}>
                        <a href='#'><span>Ask Us</span></a>
                    </li>
                </ul>
            </div>
            <div className='header-end'>
                <i onClick={() => document.querySelector('.mobile-menu').style.display = 'flex'} class="fa fa-bars" aria-hidden="true"><span>Menu</span></i>
                <a href='/'>
                    <i class='fa fa-search' aria-hidden='true'></i>
                </a>
                <a href='/'>
                    <i class='fa fa-shopping-cart' aria-hidden='true'></i>
                </a>
            </div>
        </div>
        <div className="mobile-menu">
            <div className="close">
                <i onClick={() => document.querySelector('.mobile-menu').style.display = 'none'} class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul>
                <li onClick={() => setMenuItemOnMobile(1)} className={`${getMenuItemOnMobile === 1 ? 'selected': ''}`}><a>Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(2)} className={`${getMenuItemOnMobile === 2 ? 'selected': ''}`}><a>LMS Pages</a></li>
                <li onClick={() => setMenuItemOnMobile(3)} className={`${getMenuItemOnMobile === 3 ? 'selected': ''}`}><a>Facilities</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(4)} className={`${getMenuItemOnMobile === 4 ? 'selected': ''}`}><a>Articles</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(5)} className={`${getMenuItemOnMobile === 5 ? 'selected': ''}`}><a>Pages</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(6)} className={`${getMenuItemOnMobile === 6 ? 'selected': ''}`}><a>Ask Us</a></li>
            </ul>
        </div>
    </>)
}
