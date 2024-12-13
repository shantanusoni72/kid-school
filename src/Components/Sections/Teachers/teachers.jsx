import Carousel from 'react-multi-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import './style.css';

export default function Teachers({ data }) {
    return (
        <div className="teachers-container">
            <div className='teachers'>
                <div className="teacher-row-1">
                    <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
                        <img src='assets/cap.svg' alt='' />
                        <h1>{data.banner.starter}</h1>
                        <h2>{data.banner.heading}</h2>
                        <p>{data.banner.paragraph}</p>
                    </ScrollAnimation>
                </div>
                <div className="teacher-carousel-outer">
                    <Carousel
                        responsive={data.responsive}
                        infinite={true}
                        containerClass='teacher_carousel'
                        itemClass='teacher_item'
                        renderButtonGroupOutside={true}
                    >
                        {
                            data.cards.map((item, index) => (
                                <>
                                    <img src={item.image} alt={item.name} />
                                    <h1><a href='#'>{item.name}</a></h1>
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
            </div>
        </div>
    )
}