import React from 'react';
import Starter from '../../Utils/Starter/starter';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function Testimonial() {
  const testimonial = {
    cards: [
      {
        'rating': 5,
        'review': 'Quisque egestas ipsum vitae erat faucibus, non volutpat arcu faucibus. Phasellus auctor sed ligula in bibendum. Maecenas vel ultrices nulla. Aliquam nunc nulla, consectetur quis varius eget, tempor a nisi. Integer hendrerit viverra enim, in mattis purus fermentum et. Quisque sit amet enim a arcu euismod dapibus eget sit amet est.',
        'author': {
          'name': 'Noah Emma',
          'position': 'Business Head',
        },
        'image': 'assets/t1.jpg'
      },
      {
        'rating': 5,
        'review': 'Phasellus auctor sed ligula in bibendum. Maecenas vel ultrices nulla. Aliquam nunc nulla, consectetur quis varius eget, tempor a nisi. Integer hendrerit viverra enim, in mattis purus fermentum et. Quisque sit amet enim a arcu euismod dapibus eget sit amet est. Quisque egestas ipsum vitae erat faucibus, non volutpat arcu faucibus.',
        'author': {
          'name': 'Merlin',
          'position': 'Designer',
        },
        'image': 'assets/t2.jpg'
      },
      {
        'rating': 5,
        'review': 'Maecenas vel ultrices nulla. Aliquam nunc nulla, consectetur quis varius eget, tempor a nisi. Integer hendrerit viverra enim, in mattis purus fermentum et. Quisque sit amet enim a arcu euismod dapibus eget sit amet est. Quisque egestas ipsum vitae erat faucibus, non volutpat arcu faucibus. Phasellus auctor sed ligula in bibendum.',
        'author': {
          'name': 'Anderia',
          'position': 'Lawyer',
        },
        'image': 'assets/t3.jpg'
      },
      {
        'rating': 5,
        'review': 'Ruisque egestas ipsum vitae erat faucibus, non volutpat arcu faucibus. Phasellus auctor sed ligula in bibendum. Maecenas vel ultrices nulla. Aliquam nunc nulla, consectetur quis varius eget, tempor a nisi. Integer hendrerit viverra enim, in mattis purus fermentum et. Quisque sit amet enim a arcu euismod dapibus eget sit amet est.',
        'author': {
          'name': 'Fransis',
          'position': 'Architect',
        },
        'image': 'assets/t4.jpg'
      },
    ]
  }

  const responsive = {
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
    <div className='testimonial'>
      <Starter
        starter='Happy Parents'
        heading='Our Testimonials'
        paragraph='Quasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget.'
        starter_image='assets/strawberry.svg'
        container_1={null}
        container_2={null}
      />
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass='testimonial-carousel'
        itemClass='testimonial-item'
      >
        {
          testimonial.cards.map((item, index) => (
            <>
              <img className='flowers' src='assets/flowers.png' alt='flowers' />
              <div className="testimonial-item-row-1">
                <div className='testimonial-item-col-1'>
                  <span>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <p>{item.review}</p>
                  <div className="testimonial-item-col-1-inner">
                    <p>.....</p>
                    <div className="signature">
                      <h3>-{item.author.name}</h3>
                      <p>{item.author.position}</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-col-2">
                  <img src={item.image} alt={`testimonial-${index = 1}`} />
                </div>
              </div>
              <img className='stars' src='assets/stars.svg' alt='stars' />
              <img className='waves' src='assets/waves.svg' alt='waves' />
            </>
          ))
        }
      </Carousel>
    </div>
  )
}
