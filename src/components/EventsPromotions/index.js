import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import 'react-circular-progressbar/dist/styles.css';
import './EventsPromotions.scss';
function EventsPromotions() {
  const PublicURL = process.env.PUBLIC_URL;
  const sliderItem = [
    { img: '/GangstarVegasJessie.png', link: '#' },
    { img: '/events_promotions1.png', link: '#' },
    { img: '/events_promotions2.png', link: '#' },
    { img: '/events_promotions3.png', link: '#' },
    { img: '/events_promotions4.jpg', link: '#' },
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
        swipe={false}
        showSides={true}
        slidesToScroll={1}
        slidesToShow={1}
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
              <img alt="" src={PublicURL + item.img} />
              <div className="ItemContent">
                <div className="ItemHeading">
                  <div className="Heading">
                    <h3>short title here</h3>
                    <i className="SliderSocial">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                    {/* <img alt="" className="SliderIcon" src={PublicURL + '/share.png'} /> */}
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
    </div>
  );
}

export default EventsPromotions;
