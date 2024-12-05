import React from 'react';
import Starter from '../../Utils/Starter/starter';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function ActivityProgram() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const activity_program = {
    cards: [
      {
        'design': {
          'head': 'assets/school.svg',
          'border_radius': '10px',
          'color': '#61BFC9',
        },
        'image': 'assets/imbox1.jpg',
        'heading': 'Team Activities',
        'paragraph': 'Blandit volutpat maecenas volutpat blandit aliquam etiam. Placerat duis ultricies lacus sed consectetur adipiscing elit.',
      },
      {
        'design': {
          'head': 'assets/two_kids.svg',
          'border_radius': '100%',
          'color': '#FCCB13',
        },
        'image': 'assets/imbox2.jpg',
        'heading': 'Invidual Activity',
        'paragraph': 'Vivamus at augue eget arcu dictum varius. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.',
      },
      {
        'design': {
          'head': 'assets/dot_ball.svg',
          'border_radius': '',
          'color': '#F7941E',
        },
        'image': 'assets/imbox3.jpg',
        'heading': 'Craft',
        'paragraph': 'Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit Fusce.',
      },
      {
        'design': {
          'head': 'assets/dot_ball.svg',
          'border_radius': '',
          'color': '#AD5FF3',
        },
        'image': 'assets/imbox4.jpg',
        'heading': 'Painting',
        'paragraph': 'Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit Fusce.',
      },
      {
        'design': {
          'head': 'assets/school.svg',
          'border_radius': '10px',
          'color': '#61BFC9',
        },
        'image': 'assets/imbox1.jpg',
        'heading': 'Team Activities',
        'paragraph': 'Blandit volutpat maecenas volutpat blandit aliquam etiam. Placerat duis ultricies lacus sed consectetur adipiscing elit.',
      },
      {
        'design': {
          'head': 'assets/two_kids.svg',
          'border_radius': '100%',
          'color': '#FCCB13',
        },
        'image': 'assets/imbox2.jpg',
        'heading': 'Invidual Activity',
        'paragraph': 'Vivamus at augue eget arcu dictum varius. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.',
      },
      {
        'design': {
          'head': 'assets/dot_ball.svg',
          'border_radius': '',
          'color': '#F7941E',
        },
        'image': 'assets/imbox3.jpg',
        'heading': 'Craft',
        'paragraph': 'Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit Fusce.',
      },
    ]
  }

  return (
    <div className='activity_program'>
      <Starter
        starter='Activity Programs'
        heading='Smart Activities'
        paragraph='Forbi mauris augue, pulvinar quis luctus eget. Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc.'
        starter_image='assets/cap.svg'
        container_1={null}
        container_2={
          <img className='rainbow_img' src='assets/rainbow.svg' alt='rainbow' />
        }
      />
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass='activity_program_carousel'
        itemClass='activity_program_item'
      >
        {
          activity_program.cards.map((item, index) => (
            <>
              <img className='small' src={item.design.head} alt={item.heading} />
              <img className='profile' style={{ borderColor: `${item.design.color}`, borderRadius: `${item.design.border_radius}` }} src={item.image} alt={item.heading} />
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
            </>
          ))
        }
      </Carousel>
    </div>
  )
}
