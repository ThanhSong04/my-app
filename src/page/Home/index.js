import React, { useState } from 'react';
import Banner from '../../Layout/components/Banner';
import RegisterForm from '../../Layout/components/RegisterForm';
import EventsPromotions from '../../Layout/components/EventsPromotions';
import './Home.scss';
import Footer from '../../Layout/DefaultLayout/Footer';
import Menu from '../../components/menu';
import Section from '../../components/section';

function Home() {
  return (
    <>
      <Menu />
      <Section card="1" component={<Banner />} />
      <Section card="2" component={<RegisterForm />} />
      <Section card="3" component={<EventsPromotions />} />
      <Section card="4" component={<Footer />} />
    </>
  );
}

export default Home;
