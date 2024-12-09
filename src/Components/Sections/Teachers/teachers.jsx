import Carousel from 'react-multi-carousel';
import Starter from '../../Utils/Starter/starter';
import './style.css';

export default function Teachers({ data }) {
    return (
        <div className='teachers'>
            <Starter
                starter={data.banner.starter}
                heading={data.banner.heading}
                paragraph={data.banner.paragraph}
                starter_image='assets/cap.svg'
                container_1={
                    <img className='people_gossiping_img' src='assets/people_gossiping.svg' alt='people_gossiping' />
                }
                container_2={null}
            />
            <Carousel
                responsive={data.responsive}
                infinite={true}
                containerClass='teacher_carousel'
                itemClass='teacher_item'
            >
                {
                    data.cards.map((item, index) => (
                        <>
                            <img src={item.image} alt={item.name} />
                            <h1>{item.name}</h1>
                            <p>{item.paragraph}</p>
                            <span>
                                {
                                    item.social.map((sub_item, sub_index) => (
                                        <a href={sub_item.link} key={sub_index}><i class={sub_item.id} aria-hidden='true'></i></a>
                                    ))
                                }
                            </span>
                        </>
                    ))
                }
            </Carousel>
        </div>
    )
}