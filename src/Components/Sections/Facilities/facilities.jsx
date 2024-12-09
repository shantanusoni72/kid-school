import Starter from '../../Utils/Starter/starter';
import Button from '../../Utils/Button/button';
import './style.css';

export default function Facilities({ data }) {
  
  return (
    <div className='facilities'>
      <Starter
        starter={data.banner.starter}
        heading={data.banner.heading}
        paragraph={data.banner.paragraph}
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
          data.cards.map((item, index) => (
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