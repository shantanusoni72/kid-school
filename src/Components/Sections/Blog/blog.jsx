import Button from '../../Utils/Button/button';
import './style.css';

export default function Blog({ data }) {
    return (
        <div className="blog-outer">
            <img className='ufo' src='/assets/sexy_ufo.svg' alt='' />
            <img className='painter' src='assets/painter.png' alt='painter' />
            <div className='blog-container'>
                <div className="blog-text-outer">
                    <div className="blog-text">
                        <div className="blog-text-intro">
                            <label>{data.banner.label}</label>
                            <h2>{data.banner.heading}</h2>
                        </div>
                        <div className="blogs">
                            {
                                data.cards.map((item, index) => (<>
                                    <img src='assets/underline_1.png' />
                                    <div className="blog">
                                        <span>
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <label>{item.date}</label>
                                        </span>
                                        <div>
                                            <h2>{item.heading}</h2>
                                            <p>{item.paragraph}</p>
                                        </div>
                                    </div>
                                </>))
                            }
                        </div>
                        <div className="button-wrapper-blog">
                            <Button text="View More" link='/' />
                        </div>
                    </div>
                </div>
                <div className="blog-images">
                    <img className='b1-bg' src='assets/custom-shape-bg-layer1a.svg' alt='none' />
                    <img className='b1' src='assets/b1.jpg' alt='b1' />
                    <img className='b2' src='assets/b2.jpg' alt='b2' />
                    <img className='right-arrow-dashed' src='assets/right-arrow-dashed.svg' alt='' />
                    <img className='train' src='assets/train.svg' alt='' />
                    <img className='ducky' src='assets/ducky.svg' alt='' />
                </div>
            </div>
            <img class='bottom' src='assets/bottom.png' alt='' />
        </div>
    )
}