import React, { useState } from 'react';
import './style.css';

export default function Header() {
    const [getMenuItem, setMenuItem] = useState(1);
    const [getMenuItemOnMobile, setMenuItemOnMobile] = useState(1);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        if (window.pageYOffset !== 0) {
            document.querySelector(".header-container.normal").style.display = "none";
            document.querySelector(".header-container.sticky").style.display = "flex";
        } else {
            document.querySelector(".header-container.normal").style.display = "flex";
            document.querySelector(".header-container.sticky").style.display = "none";
        }

        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            document.querySelector(".header-container.sticky").style.top = "0";
        } else {
            document.querySelector(".header-container.sticky").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (<>
        <div className="header-container sticky">
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
                    <i onClick={() => document.querySelector('.mobile-menu').classList.remove('hidden')} class="fa fa-bars" aria-hidden="true"><span>Menu</span></i>
                    <a href='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 100 100"
                            style={{ enableBackground: "new 0 0 100 100" }}
                            width='21'
                            height='21'
                            fill='currentColor'
                            xmlSpace="preserve"
                        >
                            <path d="M92.536,99c-1.236-0.435-2.181-1.353-3.362-2.586c-4.385-4.577-8.852-9.222-13.171-13.713 c-2.947-3.064-5.894-6.128-8.838-9.194c-0.08-0.083-0.184-0.253-0.284-0.417c-0.077-0.125-0.154-0.251-0.236-0.371l-0.82-1.211 l-1.16,0.891c-0.263,0.202-0.401,0.292-0.524,0.371c-0.046,0.029-0.088,0.057-0.13,0.085c-6.482,4.354-13.721,6.615-21.518,6.72 c-0.188,0.002-0.378,0.004-0.565,0.004c-7.983,0-15.423-2.33-22.115-6.925C13.81,68.531,9.226,63.028,6.187,56.296 c-3.163-7.008-4.153-14.465-2.941-22.162c1.258-7.99,4.781-15.047,10.472-20.975c5.741-5.98,12.739-9.817,20.799-11.404 c1.121-0.221,2.294-0.382,3.428-0.538c0.513-0.07,1.026-0.141,1.537-0.217h5.116l0.749,0.103c0.624,0.086,1.249,0.173,1.873,0.257 c8.804,1.184,16.459,5.01,22.752,11.371c6.234,6.302,9.951,13.907,11.049,22.606c0.99,7.844-0.254,15.288-3.696,22.125 c-0.972,1.931-2.159,3.803-3.416,5.785c-0.609,0.961-1.239,1.955-1.877,3.005l-0.607,0.999l0.887,0.761 c0.226,0.194,0.474,0.395,0.737,0.608c0.585,0.474,1.248,1.011,1.814,1.596c4.486,4.636,9.034,9.364,13.431,13.936 c2.504,2.603,5.008,5.207,7.515,7.807c1.381,1.433,1.751,2.802,1.201,4.439c-0.417,1.242-1.305,2.027-2.952,2.601H92.536z  M42.026,8.869c-17.251,0-31.337,14.077-31.399,31.381c-0.03,8.353,3.234,16.245,9.191,22.223c5.948,5.97,13.811,9.258,22.14,9.258 l0.122,0c17.304-0.068,31.384-14.165,31.388-31.426C73.472,22.999,59.39,8.897,42.077,8.869H42.026z" />
                        </svg>
                    </a>
                    <a href='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 97.747 93.131"
                            style={{ enableBackground: "new 0 0 97.747 93.131" }}
                            width='21'
                            height='21'
                            fill='currentColor'
                            xmlSpace="preserve"
                        >
                            <path d="M90.452,81.555c0-3.07-1.219-6.015-3.391-8.185c-2.171-2.171-5.115-3.391-8.185-3.391c-3.07,0-6.014,1.22-8.185,3.391 c-2.171,2.171-3.39,5.115-3.39,8.185c0,3.07,1.219,6.014,3.39,8.185c2.171,2.171,5.115,3.391,8.185,3.391 c3.068-0.006,6.01-1.227,8.18-3.397C89.226,87.565,90.447,84.623,90.452,81.555L90.452,81.555z M75.379,81.555 c0-0.925,0.367-1.812,1.022-2.466c0.654-0.654,1.541-1.022,2.466-1.022s1.812,0.367,2.466,1.022 c0.654,0.654,1.022,1.541,1.022,2.466c0,0.925-0.367,1.812-1.022,2.466c-0.654,0.654-1.541,1.022-2.466,1.022 c-0.925-0.003-1.809-0.371-2.463-1.025C75.75,83.365,75.382,82.479,75.379,81.555L75.379,81.555z" />
                            <path d="M93.697,14.649H25.729l-1.83-7.673c-0.477-1.987-1.609-3.756-3.214-5.022C19.081,0.689,17.097,0.001,15.053,0H4.044 c-1.445,0-2.78,0.771-3.502,2.022c-0.722,1.251-0.722,2.793,0,4.044c0.722,1.251,2.057,2.022,3.502,2.022h11 c0.479-0.013,0.901,0.312,1.011,0.779L26.082,50.72h0.001c-1.694,2.123-2.521,4.807-2.316,7.515s1.427,5.237,3.421,7.079 c1.994,1.843,4.611,2.863,7.326,2.855h54.289c1.445,0,2.78-0.771,3.502-2.022c0.723-1.251,0.723-2.793,0-4.044 c-0.722-1.251-2.057-2.022-3.502-2.022h-54.32c-0.957,0-1.842-0.511-2.32-1.339c-0.479-0.829-0.479-1.85,0-2.679 c0.478-0.829,1.363-1.34,2.32-1.34h44.988c2.712,0,5.347-0.91,7.481-2.583c2.135-1.673,3.648-4.013,4.297-6.647l6.369-25.83h-0.001 c0.313-1.212,0.047-2.501-0.721-3.49c-0.767-0.989-1.95-1.567-3.202-1.565L93.697,14.649z M83.405,43.532 c-0.224,0.87-0.732,1.639-1.442,2.188c-0.71,0.549-1.583,0.846-2.481,0.845H33.393L27.64,22.737h60.9L83.405,43.532z" />
                            <path d="M34.577,93.131c3.07,0,6.014-1.22,8.185-3.391c2.171-2.171,3.391-5.115,3.391-8.185c0-3.07-1.22-6.015-3.391-8.185 c-2.171-2.171-5.115-3.391-8.185-3.391c-3.07,0-6.015,1.22-8.185,3.391c-2.171,2.171-3.391,5.115-3.391,8.185 c0.006,3.068,1.227,6.01,3.396,8.179C28.567,91.904,31.508,93.125,34.577,93.131z M34.577,78.057c0.925,0,1.812,0.367,2.466,1.021 c0.654,0.654,1.022,1.542,1.022,2.467c0,0.925-0.367,1.812-1.022,2.466c-0.654,0.654-1.541,1.021-2.466,1.021 s-1.812-0.367-2.466-1.021c-0.654-0.654-1.022-1.542-1.022-2.466c0.006-0.923,0.374-1.806,1.028-2.457 c0.653-0.652,1.537-1.018,2.46-1.021L34.577,78.057z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="header-container normal">
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
                    <i onClick={() => document.querySelector('.mobile-menu').classList.remove('hidden')} class="fa fa-bars" aria-hidden="true"><span>Menu</span></i>
                    <a href='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 100 100"
                            style={{ enableBackground: "new 0 0 100 100" }}
                            width='21'
                            height='21'
                            fill='currentColor'
                            xmlSpace="preserve"
                        >
                            <path d="M92.536,99c-1.236-0.435-2.181-1.353-3.362-2.586c-4.385-4.577-8.852-9.222-13.171-13.713 c-2.947-3.064-5.894-6.128-8.838-9.194c-0.08-0.083-0.184-0.253-0.284-0.417c-0.077-0.125-0.154-0.251-0.236-0.371l-0.82-1.211 l-1.16,0.891c-0.263,0.202-0.401,0.292-0.524,0.371c-0.046,0.029-0.088,0.057-0.13,0.085c-6.482,4.354-13.721,6.615-21.518,6.72 c-0.188,0.002-0.378,0.004-0.565,0.004c-7.983,0-15.423-2.33-22.115-6.925C13.81,68.531,9.226,63.028,6.187,56.296 c-3.163-7.008-4.153-14.465-2.941-22.162c1.258-7.99,4.781-15.047,10.472-20.975c5.741-5.98,12.739-9.817,20.799-11.404 c1.121-0.221,2.294-0.382,3.428-0.538c0.513-0.07,1.026-0.141,1.537-0.217h5.116l0.749,0.103c0.624,0.086,1.249,0.173,1.873,0.257 c8.804,1.184,16.459,5.01,22.752,11.371c6.234,6.302,9.951,13.907,11.049,22.606c0.99,7.844-0.254,15.288-3.696,22.125 c-0.972,1.931-2.159,3.803-3.416,5.785c-0.609,0.961-1.239,1.955-1.877,3.005l-0.607,0.999l0.887,0.761 c0.226,0.194,0.474,0.395,0.737,0.608c0.585,0.474,1.248,1.011,1.814,1.596c4.486,4.636,9.034,9.364,13.431,13.936 c2.504,2.603,5.008,5.207,7.515,7.807c1.381,1.433,1.751,2.802,1.201,4.439c-0.417,1.242-1.305,2.027-2.952,2.601H92.536z  M42.026,8.869c-17.251,0-31.337,14.077-31.399,31.381c-0.03,8.353,3.234,16.245,9.191,22.223c5.948,5.97,13.811,9.258,22.14,9.258 l0.122,0c17.304-0.068,31.384-14.165,31.388-31.426C73.472,22.999,59.39,8.897,42.077,8.869H42.026z" />
                        </svg>
                    </a>
                    <a href='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 97.747 93.131"
                            style={{ enableBackground: "new 0 0 97.747 93.131" }}
                            width='21'
                            height='21'
                            fill='currentColor'
                            xmlSpace="preserve"
                        >
                            <path d="M90.452,81.555c0-3.07-1.219-6.015-3.391-8.185c-2.171-2.171-5.115-3.391-8.185-3.391c-3.07,0-6.014,1.22-8.185,3.391 c-2.171,2.171-3.39,5.115-3.39,8.185c0,3.07,1.219,6.014,3.39,8.185c2.171,2.171,5.115,3.391,8.185,3.391 c3.068-0.006,6.01-1.227,8.18-3.397C89.226,87.565,90.447,84.623,90.452,81.555L90.452,81.555z M75.379,81.555 c0-0.925,0.367-1.812,1.022-2.466c0.654-0.654,1.541-1.022,2.466-1.022s1.812,0.367,2.466,1.022 c0.654,0.654,1.022,1.541,1.022,2.466c0,0.925-0.367,1.812-1.022,2.466c-0.654,0.654-1.541,1.022-2.466,1.022 c-0.925-0.003-1.809-0.371-2.463-1.025C75.75,83.365,75.382,82.479,75.379,81.555L75.379,81.555z" />
                            <path d="M93.697,14.649H25.729l-1.83-7.673c-0.477-1.987-1.609-3.756-3.214-5.022C19.081,0.689,17.097,0.001,15.053,0H4.044 c-1.445,0-2.78,0.771-3.502,2.022c-0.722,1.251-0.722,2.793,0,4.044c0.722,1.251,2.057,2.022,3.502,2.022h11 c0.479-0.013,0.901,0.312,1.011,0.779L26.082,50.72h0.001c-1.694,2.123-2.521,4.807-2.316,7.515s1.427,5.237,3.421,7.079 c1.994,1.843,4.611,2.863,7.326,2.855h54.289c1.445,0,2.78-0.771,3.502-2.022c0.723-1.251,0.723-2.793,0-4.044 c-0.722-1.251-2.057-2.022-3.502-2.022h-54.32c-0.957,0-1.842-0.511-2.32-1.339c-0.479-0.829-0.479-1.85,0-2.679 c0.478-0.829,1.363-1.34,2.32-1.34h44.988c2.712,0,5.347-0.91,7.481-2.583c2.135-1.673,3.648-4.013,4.297-6.647l6.369-25.83h-0.001 c0.313-1.212,0.047-2.501-0.721-3.49c-0.767-0.989-1.95-1.567-3.202-1.565L93.697,14.649z M83.405,43.532 c-0.224,0.87-0.732,1.639-1.442,2.188c-0.71,0.549-1.583,0.846-2.481,0.845H33.393L27.64,22.737h60.9L83.405,43.532z" />
                            <path d="M34.577,93.131c3.07,0,6.014-1.22,8.185-3.391c2.171-2.171,3.391-5.115,3.391-8.185c0-3.07-1.22-6.015-3.391-8.185 c-2.171-2.171-5.115-3.391-8.185-3.391c-3.07,0-6.015,1.22-8.185,3.391c-2.171,2.171-3.391,5.115-3.391,8.185 c0.006,3.068,1.227,6.01,3.396,8.179C28.567,91.904,31.508,93.125,34.577,93.131z M34.577,78.057c0.925,0,1.812,0.367,2.466,1.021 c0.654,0.654,1.022,1.542,1.022,2.467c0,0.925-0.367,1.812-1.022,2.466c-0.654,0.654-1.541,1.021-2.466,1.021 s-1.812-0.367-2.466-1.021c-0.654-0.654-1.022-1.542-1.022-2.466c0.006-0.923,0.374-1.806,1.028-2.457 c0.653-0.652,1.537-1.018,2.46-1.021L34.577,78.057z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="mobile-menu hidden">
            <div className="close">
                <i onClick={() => document.querySelector('.mobile-menu').classList.add('hidden')} class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul>
                <li onClick={() => setMenuItemOnMobile(1)} className={`${getMenuItemOnMobile === 1 ? 'selected' : ''}`}><a>Home</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(2)} className={`${getMenuItemOnMobile === 2 ? 'selected' : ''}`}><a>LMS Pages</a></li>
                <li onClick={() => setMenuItemOnMobile(3)} className={`${getMenuItemOnMobile === 3 ? 'selected' : ''}`}><a>Facilities</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(4)} className={`${getMenuItemOnMobile === 4 ? 'selected' : ''}`}><a>Articles</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(5)} className={`${getMenuItemOnMobile === 5 ? 'selected' : ''}`}><a>Pages</a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                <li onClick={() => setMenuItemOnMobile(6)} className={`${getMenuItemOnMobile === 6 ? 'selected' : ''}`}><a>Ask Us</a></li>
            </ul>
        </div>
    </>)
}
