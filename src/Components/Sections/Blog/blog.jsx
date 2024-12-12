import React from 'react';
import Button from '../../Utils/Button/button';
import './style.css';

export default function Blog() {
    const blog = {
        blogs: [
            {
                'heading': 'Kindergarten Outdoor Play Area',
                'paragraph': 'An Overview Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Viverra adipiscing at...',
                'link': '/',
                'date': 'Dec 29, 2022',
            },
            {
                'heading': 'Well Equipped With Indoor Class Rooms',
                'paragraph': 'An Overview Quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi...',
                'link': '/',
                'date': 'Dec 29, 2022',
            },
            {
                'heading': 'Education Filled With Fun & Games',
                'paragraph': 'An Overview Nisl rhoncus mattis rhoncus urna. Pellentesque massa placerat duis ultricies lacus sed...',
                'link': '/',
                'date': 'Dec 29, 2022',
            },
        ]
    }

    return (
        <div className="blog-outer">
            <img className='ufo' src='/assets/sexy_ufo.svg' alt='' />
            {/* <div className='blog-container-top first'></div>
            <div className='blog-container-top second'></div> */}
            <img className='painter' src='assets/painter.png' alt='painter' />
            <div className='blog-container'>
                <div className="blog-text-outer">
                    <div className="blog-text">
                        <div className="blog-text-intro">
                            <label>Blog</label>
                            <h2>News about our Education</h2>
                        </div>
                        <div className="blogs">
                            {
                                blog.blogs.map((item, index) => (
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
                                ))
                            }
                        </div>
                        <Button text="View More" link='/' type='small' />
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
            {/* <div className='blog-container-bottom first'></div>
            <div className='blog-container-bottom second'></div> */}
        </div>
    )
}
