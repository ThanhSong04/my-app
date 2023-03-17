import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { saveAs } from 'file-saver';

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
  const download = (url) => {
    const a = url.split('/');
    const filename = a[a.length - 1];
    saveAs(url, filename);
  };
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
        cycleInterval={5000}
        slidesSpacing={12}
        paging={true}
      >
        {sliderItem.map((item, index) => (
          <div key={index} className="ExclusiveItem">
            <div className="ExclusiveImg">
              <img alt="" src={PublicURL + item.img} />
              <button className="icon__download" onClick={() => download(PublicURL + item.img)}>
                <img alt="" src={PublicURL + '/icon__download.png'} />
              </button>
            </div>
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
}

export default Exclusive;
