import React from 'react';
import './style.css';

export default function Footer() {
    return (<>
        <div className='footer-top'>
            <div className="footer-row-1">
                <img src='assets/cloud_1.png' alt='' />
                <img src='assets/cloud_2.png' alt='' />
                <img src='assets/sun.svg' alt='' />
            </div>
        </div>
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-row-2">
                    <div className="footer-row-2-col-1">
                        <img src='assets/logo_2.png' alt='' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusm</p>
                    </div>
                    <div className="footer-row-2-col-2">
                        <label>Pages</label>
                        <ul>
                            <li>
                                <a href='/'>About Ninos</a>
                            </li>
                            <li>
                                <a href='/'>Our Team</a>
                            </li>
                            <li>
                                <a href='/'>News Feed</a>
                            </li>
                            <li>
                                <a href='/'>Infrastucture</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-row-2-col-3">
                        <label>Help</label>
                        <ul>
                            <li>
                                <a href='/'>Start a Return</a>
                            </li>
                            <li>
                                <a href='/'>Shipping & Return Policy</a>
                            </li>
                            <li>
                                <a href='/'>F.A.Q.</a>
                            </li>
                            <li>
                                <a href='/'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-row-2-col-4">
                        <label>Our Galleries</label>
                        <div className="footer-row-2-col-4-galleries">
                            <img src='assets/g4.jpg' alt='' />
                            <img src='assets/g2.jpg' alt='' />
                            <img src='assets/g3.jpg' alt='' />
                            <img src='assets/g6.jpg' alt='' />
                            <img src='assets/g5.jpg' alt='' />
                            <img src='assets/g7.jpg' alt='' />
                        </div>
                    </div>
                </div>
                <div className="footer-row-3">
                    <div className='underline_bg'></div>
                    <div className='underline_bg'></div>
                </div>
                <div className="footer-row-4">
                    <div className="footer-row-4-col-1">
                        <p>Copyright © 2023 Kids by Wedesigntech. All Rights Reserved.</p>
                    </div>
                    <div className="footer-row-4-col-2">
                        <img src='assets/hand.png' alt='hand' />
                    </div>
                    <div className='footer-row-4-col-3'>
                        <span>
                            <img src='assets/visa.svg' alt='visa' />
                            <img src='assets/master_card.svg' alt='master_card' />
                            <img src='assets/paypal.svg' alt='paypal' />
                            <img src='assets/amazon_pay.svg' alt='amazon_pay' />
                        </span>
                        <span>
                            <a href='/'>Privacy Policy Terms</a>
                            <label>|</label>
                            <a href='/'>Conditions</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
