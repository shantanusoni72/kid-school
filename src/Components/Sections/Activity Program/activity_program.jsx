import React from 'react';
import Starter from '../../Utils/Starter/starter';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function ActivityProgram({ data }) {
  return (
    <div className='activity_program'>
      <Starter
        starter={data.banner.starter}
        heading={data.banner.heading}
        paragraph={data.banner.paragraph}
        starter_image='assets/cap.svg'
        container_1={null}
        container_2={
          <img className='rainbow_img' src='assets/rainbow.svg' alt='rainbow' />
        }
      />
      <Carousel
        responsive={data.responsive}
        infinite={true}
        containerClass='activity_program_carousel'
        itemClass='activity_program_item'
      >
        {
          data.cards.map((item, index) => (
            <>
              <img className='small' src={item.design.head} alt={item.heading} />
              <img className='profile' style={{ borderColor: `${item.design.color}`, borderRadius: `${item.design.border_radius}`, maskImage: `url(${item.design.shape ? item.design.shape : 'none'})` }} src={item.image} alt={item.heading} />
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
            </>
          ))
        }
      </Carousel>
    </div>
  )
}
