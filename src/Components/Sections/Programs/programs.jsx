import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

export default function Programs({ data }) {
    const StyledDiv = styled.div`
  &::after {
    background-image: url('${(props) => props.sideImage}');
  }
`;
    return (
        <div className="program-outer">
            <div className='program-container'>
                <div className="program-row-1">
                    <div className="program-row-1-col-1">
                        <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                            <img className='planet_1' src='assets/planet.svg' alt='planet_1' />
                        </ScrollAnimation>
                    </div>
                    <div className='program-row-1-col-2'>
                        <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
                            <img src='assets/calci.svg' alt='' />
                            <h1>{data.text.starter}</h1>
                            <h2>{data.text.heading}</h2>
                            <p>{data.text.paragraph}</p>
                        </ScrollAnimation>
                    </div>
                    <div className="program-row-1-col-3">
                        <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
                            <img className='abc_img' src='assets/123.svg' alt='abc' />
                            <img className='pen_img' src='assets/pen.svg' alt='pen' />
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="program-row-2">
                    {
                        data.cards.map((item, index) => (
                            <ScrollAnimation animateIn={(index + 1) % 2 === 0 ? 'bounceInRight' : 'bounceInLeft'} animateOnce={true}>
                                <StyledDiv sideImage={item.side_image} className="program-card" key={index}>
                                    <img src={item.image} alt={item.heading} />
                                    <div className="program-card-text">
                                        <h1>{item.heading}</h1>
                                        <p>{item.paragraph}</p>
                                        <a href={item.button.url}>{item.button.text}</a>
                                    </div>
                                </StyledDiv>
                            </ScrollAnimation>
                        ))
                    }
                </div>
                <div className="program-row-3">
                    <Button text='View More' link='/' />
                </div>
            </div>
        </div>
    )
}
