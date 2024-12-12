import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-multi-carousel';
import './style.css';

export default function ActivityProgram({ data }) {
  return (
    <div className='activity_program'>
      <div className="activity_program-row-1">
        <div className="activity_program-row-1-col-1"></div>
        <div className='activity_program-row-1-col-2'>
          <ScrollAnimation animateIn='bounceInUp' animateOnce={true}>
            <img src='assets/cap.svg' alt='' />
            <h1>{data.banner.starter}</h1>
            <h2>{data.banner.heading}</h2>
            <p>{data.banner.paragraph}</p>
          </ScrollAnimation>
        </div>
        <div className="activity_program-row-1-col-3">
          <ScrollAnimation animateIn='bounceInDown' animateOnce={true}>
            <img className='rainbow_img' src='assets/rainbow.svg' alt='rainbow' />
          </ScrollAnimation>
        </div>
      </div>
      <div className="activity_program_carousel_outer">
        <Carousel
          responsive={data.responsive}
          infinite={true}
          containerClass='activity_program_carousel'
          itemClass='carousel_item'
          renderButtonGroupOutside={true}
        >
          <div className='activity_program_item first'>
            <img className='small' src='assets/school.svg' alt='' />
            <img className='profile' src='assets/imbox1.jpg' alt='' />
            <h1>Physical Activities</h1>
            <p>Sed pulvinar proin gravida hendrerit lectus a. Sed nisi lacus sed viverra. Vitae auctor eu augue ut. Ac felis donec et odio.</p>
          </div>

          <div className='activity_program_item second'>
            <img className='small' src='assets/two_kids.svg' alt='' />
            <img className='profile' src='assets/imbox2.jpg' alt='' />
            <h1>Team Activities</h1>
            <p>Blandit volutpat maecenas volutpat blandit aliquam etiam. Placerat duis ultricies lacus sed consectetur adipiscing elit.</p>
          </div>

          <div className='activity_program_item third'>
            <img className='small' src='assets/dot_ball.svg' alt='' />
            <div className="profile-wrapper">
              <img className='profile' src='assets/imbox3.jpg' alt='' />
            </div>
            <h1>Invidual Activity</h1>
            <p>Vivamus at augue eget arcu dictum varius. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.</p>
          </div>

          <div className='activity_program_item fourth'>
            <img className='small' src='assets/dot_ball.svg' alt='' />
            <div className="profile-wrapper">
              <img className='profile' src='assets/imbox4.jpg' alt='' />
            </div>
            <h1>Craft</h1>
            <p>Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit Fusce.</p>
          </div>

          <div className='activity_program_item fifth'>
            <img className='small' src='assets/dot_ball.svg' alt='' />
            <div className="profile-wrapper">
              <img className='profile' src='assets/imbox5.jpg' alt='' />
            </div>
            <h1>Painting</h1>
            <p>Aliquam congue id velit sit amet vehicula. Donec quis pretium orci. Mauris posuere sem nec ex laoreet suscipit Fusce.</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}