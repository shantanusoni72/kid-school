import React from 'react';
import Starter from '../../Utils/Starter/starter';
import './style.css';
import Button from '../../Utils/Button/button';

export default function Facilities() {
  const facilities = {
    cards: [
      {
        'image': 'assets/f1.jpg',
        'heading': 'Class Room',
        'paragraph': 'Purus sit amet luctus venenatis lectus magna fringilla urna. Scelerisque viverra mauris in aliquam sem fringilla ut ac.',
        'button': {
          'text': 'View More',
          'link': '/'
        },
        'side_image': 'assets/book.svg'
      },
      {
        'image': 'assets/f2.jpg',
        'heading': 'Transport',
        'paragraph': 'Tristique risus nec feugiat in. Auctor augue mauris augue neque gravida in fermentum et sollic set itudin.',
        'button': {
          'text': 'View More',
          'link': '/'
        },
        'side_image': 'assets/bus.svg'
      },
      {
        'image': 'assets/f3.jpg',
        'heading': 'Play Area',
        'paragraph': 'Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Ultrices eros in cursus turpis massa tincidunt dui.',
        'button': {
          'text': 'View More',
          'link': '/'
        },
        'side_image': 'assets/play_toy.svg'
      },
      {
        'image': 'assets/f4.jpg',
        'heading': 'Healthy Foods',
        'paragraph': 'Integer enim neque volutpat ac tincidunt vitae semper. Eget duis at tellus at urna condimentum mattis pellentesque id.',
        'button': {
          'text': 'View More',
          'link': '/'
        },
        'side_image': 'assets/book.svg'
      },
    ]
  }

  return (
    <div className='facilities'>
      <Starter
        starter='School Facilities'
        heading='Engaging & Spacious School Campus'
        paragraph='Hise sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida.'
        starter_image='assets/cap.svg'
        container_1={
          <img className='star_img' src='assets/star.svg' alt='star' />
        }
        container_2={
          <img className='planet_2_img' src='assets/planet_2.svg' alt='planet_2' />
        }
      />
      <div className="facilities-row-2">
        {
          facilities.cards.map((item, index) => (
            <div className='facilities-card-outer'>
              <div className="facilities-card" key={index}>
                <img src={item.image} alt={item.heading} />
                <hr />
                <h1>{item.heading}</h1>
                <p>{item.paragraph}</p>
              </div>
              <div className="facilities-card-lower">
                <div className="svg" style={{ maskImage: `url(${item.side_image})` }}></div>
                <div className="button-div">
                  <Button text={item.button.text} link={item.button.link} type='small' />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
