import React from 'react';
import Carousel from 'react-multi-carousel';
import Starter from '../../Utils/Starter/starter';
import './style.css';

export default function Teachers() {
    const teachers = {
        cards: [
            {
                'image': 'assets/Team_image_1.jpg',
                'name': 'Sarah Michelle',
                'paragraph': 'Sit amet nisl suscipit adipiscing bibendum est. Aliquam ultrices sagittis orci a scelerisque purus.',
                'social': [
                    {
                        'name': 'facebook',
                        'id': 'fa fa-facebook',
                        'link': '/'
                    },
                    {
                        'name': 'twitter',
                        'id': 'fa fa-twitter',
                        'link': '/'
                    },
                    {
                        'name': 'linkedin',
                        'id': 'fa fa-linkedin',
                        'link': '/'
                    }
                ]
            },
            {
                'image': 'assets/Team_image_2.jpg',
                'name': 'Mary Grace',
                'paragraph': 'Bibendum ut tristique et egestas quis ipsum suspendisse. Euismod quis viverra nibh cras pulvinar mattis nunc.',
                'social': [
                    {
                        'name': 'facebook',
                        'id': 'fa fa-facebook',
                        'link': '/'
                    },
                    {
                        'name': 'twitter',
                        'id': 'fa fa-twitter',
                        'link': '/'
                    },
                    {
                        'name': 'linkedin',
                        'id': 'fa fa-linkedin',
                        'link': '/'
                    }
                ]
            },
            {
                'image': 'assets/Team_image_3.jpg',
                'name': 'Emma Grace',
                'paragraph': 'Vellentesque tristique tincidunt massa in faucibus. Sed est erat, pharetra id tortor ut, lacinia molestie ligula.',
                'social': [
                    {
                        'name': 'facebook',
                        'id': 'fa fa-facebook',
                        'link': '/'
                    },
                    {
                        'name': 'twitter',
                        'id': 'fa fa-twitter',
                        'link': '/'
                    },
                    {
                        'name': 'linkedin',
                        'id': 'fa fa-linkedin',
                        'link': '/'
                    }
                ]
            },
            {
                'image': 'assets/Team_image_4.jpg',
                'name': 'Bellie Beth',
                'paragraph': 'Ballentesque tristique tincidunt massa in faucibus. Sed est erat, pharetra id tortor ut, lacinia molestie ligula.',
                'social': [
                    {
                        'name': 'facebook',
                        'id': 'fa fa-facebook',
                        'link': '/'
                    },
                    {
                        'name': 'twitter',
                        'id': 'fa fa-twitter',
                        'link': '/'
                    },
                    {
                        'name': 'linkedin',
                        'id': 'fa fa-linkedin',
                        'link': '/'
                    }
                ]
            },
            {
                'image': 'assets/Team_image_5.jpg',
                'name': 'Anna Lane',
                'paragraph': 'Kollentesque tristique tincidunt massa in faucibus. Sed est erat, pharetra id tortor ut, lacinia molestie ligula.',
                'social': [
                    {
                        'name': 'facebook',
                        'id': 'fa fa-facebook',
                        'link': '/'
                    },
                    {
                        'name': 'twitter',
                        'id': 'fa fa-twitter',
                        'link': '/'
                    },
                    {
                        'name': 'linkedin',
                        'id': 'fa fa-linkedin',
                        'link': '/'
                    }
                ]
            },
            {
                'image': 'assets/Team_image_6.jpg',
                'name': 'Emma Grace',
                'paragraph': 'Jillentesque tristique tincidunt massa in faucibus. Sed est erat, pharetra id tortor ut, lacinia molestie ligula.',
                'social': [
                    {
                        'name': 'facebook',
                        'id': 'fa fa-facebook',
                        'link': '/'
                    },
                    {
                        'name': 'twitter',
                        'id': 'fa fa-twitter',
                        'link': '/'
                    },
                    {
                        'name': 'linkedin',
                        'id': 'fa fa-linkedin',
                        'link': '/'
                    }
                ]
            },
        ]
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='teachers'>
            <Starter
                starter='Meet Our Professional '
                heading='Teachers & Trainers'
                paragraph='Chasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. Duis sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue, pulvinar quis luctus eget.'
                starter_image='assets/cap.svg'
                image_1={{ 'image': 'assets/people_gossiping.svg', 'animationVisibility': false }}
                image_2={{ 'image': '', 'lighterOpacity': false, 'rotation': '' }}
                image_3=''
            />
            <Carousel
                responsive={responsive}
                infinite={true}
                containerClass='teacher_carousel'
                itemClass='teacher_item'
            >
                {
                    teachers.cards.map((item, index) => (
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
