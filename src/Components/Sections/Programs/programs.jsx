import React from 'react';
import Button from '../../Utils/Button/button';
import Starter from '../../Utils/Starter/starter';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Programs() {
    const program = {
        'text': {
            'starter': 'Educational Programs',
            'heading': 'Step By Step Systematic Education',
            'paragraph': 'Duis sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.'
        },
        'cards': [
            {
                'image': 'assets/program-1.jpg',
                'heading': 'Online Class',
                'paragraph': 'Eu turpis egestas pretium aenean pharetra magna ac.',
                'button': {
                    'text': 'Learn More',
                    'url': '/'
                }
            },
            {
                'image': 'assets/program-2.jpg',
                'heading': 'Formal Tuition',
                'paragraph': 'Posuere ac ut consequat semper viverra nam libero justo.',
                'button': {
                    'text': 'Learn More',
                    'url': '/'
                }
            },
            {
                'image': 'assets/program-3.jpg',
                'heading': 'Special Tuition',
                'paragraph': 'Tristique risus nec feugiat in. Auctor augue mauri.',
                'button': {
                    'text': 'Learn More',
                    'url': '/'
                }
            },
            {
                'image': 'assets/program-4.jpg',
                'heading': 'Preschool',
                'paragraph': 'Adipiscing diam donec adipiscing tristique risus entum.',
                'button': {
                    'text': 'Learn More',
                    'url': '/'
                }
            },
        ]
    }

    return (
        <div className='program-container'>
            <Starter
                starter={program.text.starter}
                heading={program.text.heading}
                paragraph={program.text.paragraph}
                starter_image='assets/calci.svg'
                container_1={
                    <img className='planet_1' src='assets/planet.svg' alt='planet_1' />
                }
                container_2={<>
                    <img className='abc_img' src='assets/123.svg' alt='abc' />
                    <img className='pen_img' src='assets/pen.svg' alt='pen' />
                </>}
            />
            <div className="program-row-2">
                {
                    program.cards.map((item, index) => (
                        <ScrollAnimation animateIn={(index + 1) % 2 === 0 ? 'bounceInRight' : 'bounceInLeft'} animateOnce={true}>
                            <div className="program-card" key={index}>
                                <img src={item.image} alt={item.heading} />
                                <div className="program-card-text">
                                    <h1>{item.heading}</h1>
                                    <p>{item.paragraph}</p>
                                    <a href={item.button.url}>{item.button.text}</a>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))
                }
            </div>
            <div className="program-row-3">
                <div className="rocket-outer">
                    <img className='sketch_rocket' src='assets/drawn-rocket.svg' alt='sketch rocket' />
                </div>
            </div>
            <div className="program-row-4">
                <Button text='View More' link='/' />
            </div>
        </div>
    )
}
