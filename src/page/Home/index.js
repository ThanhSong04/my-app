import React from 'react';
import { RadioChangeEvent } from 'antd';
import { Carousel, Radio } from 'antd';
import { DotPosition } from 'antd/es/carousel';
import Banner from '../../Layout/components/Banner';
import RegisterForm from '../../Layout/components/RegisterForm';
import EventsPromotions from '../../Layout/components/EventsPromotions';
import './Home.scss';
import Footer from '../../Layout/DefaultLayout/Footer';
import Menu from '../../components/menu';
import Card from '../../components/card';

function Home() {
  // console.log('Carousel', Carousel);
  return (
    <>
      <Menu />
      <Card card="1" component={<Banner />} />
      <Card card="2" component={<RegisterForm />} />
      <Card card="3" component={<EventsPromotions />} />
      <Card card="4" component={<Footer />} />
      {/* <Carousel dotPosition="right" dots easing="easing" effect>
        <Banner />
        <RegisterForm />
        <EventsPromotions />
        <Footer />
      </Carousel> */}

      {/* <Banner />
      <div className="BgSubColor">
        <RegisterForm />
      </div>
      <div className="BgSubColor">
        <EventsPromotions />
      </div> */}
    </>
  );
}

export default Home;
