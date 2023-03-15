import React from 'react';
import Banner from '../../Layout/components/Banner';
import RegisterForm from '../../Layout/components/RegisterForm';
import EventsPromotions from '../../Layout/components/EventsPromotions';
import './Home.scss';

function Home() {
  return (
    <>
      <Banner />
      <div className="BgSubColor">
        <RegisterForm />
      </div>
      <div className="BgWhiteColor"></div>
      <div className="BgSubColor">
        <EventsPromotions />
      </div>
    </>
  );
}

export default Home;
