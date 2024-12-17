import React from 'react';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function Hero() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='hero'>
            <Carousel responsive={responsive} infinite={true}>
                <div className='carousel-item' style={{ backgroundImage: `url('assets/slider-1.jpg')` }}>
                    <div className="carousel-item-heading">
                        <h2 className='heading xl'>Learning With Fun</h2>
                        <h3 className='sub-heading xl'>Center For Excellence</h3>
                        <a href='#'>Know More</a>
                    </div>
                </div>
                <div className='carousel-item second' style={{ backgroundImage: `url('assets/slider-2.jpg')` }}>
                    <div className="inner">
                        <div className="carousel-item-heading">
                            <h1>20%</h1>
                            <h2>Flat Off</h2>
                            <h3>On Registration</h3>
                            <a href='#'>Know More</a>
                        </div>
                    </div>
                </div>
                <div className='carousel-item' style={{ backgroundImage: `url('assets/slider-3.jpg')` }}>
                    <div className="carousel-item-heading">
                        <h2 className='heading xl'>Children Focused Education</h2>
                        <h3 className='sub-heading xl'>Early Education</h3>
                        <a href='#'>Know More</a>
                    </div>
                </div>
            </Carousel>
            <div className="cloud-banner orange"></div>
            <div className="cloud-banner white"></div>
        </div>
    )
}
