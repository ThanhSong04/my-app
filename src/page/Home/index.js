import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner';
import RegisterForm from '../../components/RegisterForm';
import EventsPromotions from '../../components/EventsPromotions';
import Footer from '../../Layout/DefaultLayout/Footer';
import Section from '../../components/Section';
import Exclusive from '../../components/Exclusive';

function Home() {
  return (
    <>
      <Section card="1" component={<Banner />} />
      <Section card="2" component={<RegisterForm />} />
      <Section card="3" component={<EventsPromotions />} />
      <Section card="4" component={<Exclusive />} />
      <Section card="5" component={<Footer />} />
    </>
  );
}

export default Home;
