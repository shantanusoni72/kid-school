import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

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
            <div className="program-row-1">
                <div className="program-row-1-col-1">
                    <img src='assets/planet.svg' alt='planet' />
                </div>
                <div className="program-row-1-col-2">
                    <img src='assets/calci.svg' alt='mechanical calculator' />
                    <h1>{program.text.starter}</h1>
                    <h2>{program.text.heading}</h2>
                    <p>{program.text.paragraph}</p>
                </div>
                <div className="program-row-1-col-3">
                    <img src='assets/123.svg' alt='abc' />
                    <img src='assets/pen.svg' alt='pen' />
                </div>
            </div>
            <div className="program-row-2">
                {
                    program.cards.map((item, index) => (
                        <div className="program-card" key={index}>
                            <img src={item.image} alt={item.heading} />
                            <div className="program-card-text">
                                <h1>{item.heading}</h1>
                                <p>{item.paragraph}</p>
                                <a href={item.button.url}>{item.button.text}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="program-row-3">
                <img src='assets/drawn-rocket.svg' alt='sketch rocket' />
            </div>
            <div className="program-row-4">
                <Button text='View More' link='/' />
            </div>
        </div>
    )
}
