import Starter from '../../Utils/Starter/starter';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function Testimonial({ data }) {
  return (
    <div className='testimonial'>
      <Starter
        starter={data.banner.starter}
        heading={data.banner.heading}
        paragraph={data.banner.paragraph}
        starter_image='assets/strawberry.svg'
        container_1={null}
        container_2={null}
      />
      <Carousel
        responsive={data.responsive}
        infinite={true}
        containerClass='testimonial-carousel'
        itemClass='testimonial-item'
      >
        {
          data.cards.map((item, index) => (
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