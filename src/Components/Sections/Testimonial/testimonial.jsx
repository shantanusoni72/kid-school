import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function Testimonial({ data }) {
  return (
    <div className='testimonial'>
      <div className="testimonial-row-1">
        <div className='testimonial-row-1-col-2'>
          <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
            <img src='assets/strawberry.svg' alt='' />
            <h1>{data.banner.starter}</h1>
            <h2>{data.banner.heading}</h2>
            <p>{data.banner.paragraph}</p>
          </ScrollAnimation>
        </div>
      </div>
      <Carousel
        responsive={data.responsive}
        infinite={true}
        containerClass='testimonial-carousel'
        itemClass='testimonial-item'
      >
        {
          data.cards.map((item, index) => (
            <>
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
            </>
          ))
        }
      </Carousel>
    </div>
  )
}