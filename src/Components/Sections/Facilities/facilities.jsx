import Button from '../../Utils/Button/button';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

export default function Facilities({ data }) {

  return (
    <div className='facilities'>
      <div className="facilities-row-1">
        <div className="facilities-row-1-col-1">
          <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
            <img className='star_img' src='assets/star.svg' alt='star' />
          </ScrollAnimation>
        </div>
        <div className='facilities-row-1-col-2'>
          <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
            <h1>{data.banner.starter}</h1>
            <h2>{data.banner.heading}</h2>
            <p>{data.banner.paragraph}</p>
          </ScrollAnimation>
        </div>
        <div className="facilities-row-1-col-3">
          <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
            <img className='planet_2_img' src='assets/planet_2.svg' alt='planet_2' />
          </ScrollAnimation>
        </div>
      </div>
      <div className="facilities-row-2">
        {
          data.cards.map((item, index) => (
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
              <div className="facilities-card" key={index}>
                <img src={item.image} alt={item.heading} />
                <h1>{item.heading}</h1>
                <div className="curl_waves"></div>
                <p>{item.paragraph}</p>
              </div>
              <div className="facilities-card-lower">
                <div className="svg" style={{ maskImage: `url(${item.side_image})` }}></div>
                <div className="button-div">
                  <Button text={item.button.text} link={item.button.link} type='small' />
                </div>
              </div>
            </ScrollAnimation>
          ))
        }
      </div>
    </div>
  )
}