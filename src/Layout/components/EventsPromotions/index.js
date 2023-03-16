import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import GangstarVegasJessie from '../../../assets/img/GangstarVegasJessie.png';
import events_promotions1 from '../../../assets/img/events_promotions1.png';
import events_promotions2 from '../../../assets/img/events_promotions2.png';
import events_promotions3 from '../../../assets/img/events_promotions3.png';
import events_promotions4 from '../../../assets/img/events_promotions4.jpg';
import Share from '../../../assets/img/share.png';
import './EventsPromotions.scss';
function EventsPromotions() {
  const sliderItem = [
    { img: GangstarVegasJessie, link: '#' },
    { img: events_promotions3, link: '#' },
    { img: events_promotions1, link: '#' },
    { img: events_promotions2, link: '#' },
    { img: events_promotions4, link: '#' },
  ];
  return (
    <div className="wrapperEventsPromotions">
      <div className="EventsPromotionsTitle">
        <h2>Special Events & Promotional</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          <br /> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.
        </p>
      </div>
      <InfiniteCarousel
        incrementalSides={true}
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ]}
        animationDuration={1000}
        dots={true}
        swipe={false}
        showSides={true}
        slidesToScroll={4}
        slidesToShow={4}
        sideSize={1}
        scrollOnDevice={true}
        autoCycle={true}
        className="WrapperSlider"
        cycleInterval={3000}
        slidesSpacing={5}
      >
        {sliderItem.map((item, index) => (
          <div key={index} className="SliderItem">
            <div className="SliderItemImg">
              <img alt="Picture 1" src={item.img} />
              <div className="ItemContent">
                <div className="ItemHeading">
                  <div className="Heading">
                    <h3>short title here</h3>
                    <img className="SliderIcon" src={Share} />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore ...
                  </p>
                </div>
                <a href={item.link} className="ItemBtn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </InfiniteCarousel>
      {/* <div className="Circular">
        <div style={{ width: '20px', height: '20px' }}>
          <CircularProgressbar value={0.66} maxValue={1} text={`${0.66 * 100}%`} />
        </div>
        <div style={{ width: '20px', height: '20px' }}>
          <CircularProgressbar value={0.66} maxValue={1} text={`${0.66 * 100}%`} />
        </div>
        <div style={{ width: '20px', height: '20px' }}>
          <CircularProgressbar value={0.66} maxValue={1} text={`${0.66 * 100}%`} />
        </div>
        <div style={{ width: '20px', height: '20px' }}>
          <CircularProgressbar value={0.66} maxValue={1} text={`${0.66 * 100}%`} />
        </div>
      </div> */}
    </div>
  );
}

export default EventsPromotions;
