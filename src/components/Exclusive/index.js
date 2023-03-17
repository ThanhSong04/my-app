import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import './Exclusive.scss';

function Exclusive() {
  const PublicURL = process.env.PUBLIC_URL;
  const sliderItem = [
    { img: '/exclusive1.jpg', link: '#' },
    { img: '/exclusive2.jpg', link: '#' },
    { img: '/exclusive3.jpg', link: '#' },
    { img: '/exclusive4.jpg', link: '#' },
    { img: '/exclusive5.jpg', link: '#' },
    { img: '/exclusive6.jpg', link: '#' },
    { img: '/exclusive2.jpg', link: '#' },
    { img: '/exclusive3.jpg', link: '#' },
    { img: '/exclusive4.jpg', link: '#' },
    { img: '/exclusive5.jpg', link: '#' },
  ];
  return (
    <div className="wrapperExclusive">
      <div className="ExclusiveTitle">
        <h2>Exclusive Game Content</h2>
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
        slidesToScroll={1}
        slidesToShow={1}
        sideSize={1}
        scrollOnDevice={true}
        autoCycle={true}
        cycleInterval={3000}
        slidesSpacing={12}
        paging={true}
      >
        {sliderItem.map((item, index) => (
          <div key={index} className="ExclusiveItem">
            <div className="ExclusiveImg">
              <img alt="Picture 1" src={PublicURL + item.img} />
              <div className="icon__download">
                <img src={PublicURL + '/icon__download.png'} />
              </div>
            </div>
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
}

export default Exclusive;
