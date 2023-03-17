import { useCallback, useEffect, useState } from 'react';
import { useDetectScroll } from '@smakss/react-scroll-direction';
import './DefaultLayout.scss';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  let [sectionId, setSectionId] = useState(1);
  useEffect(() => {
    const threshold = 30;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const increase = () => {
      sectionId++;
      if (sectionId > 5) {
        sectionId = 5;
      }
      const element = document.getElementById(`card${sectionId}`);
      element.scrollIntoView();
      return sectionId;
    };

    const decrease = () => {
      sectionId--;
      if (sectionId < 1) {
        sectionId = 1;
      }
      const element = document.getElementById(`card${sectionId}`);
      element.scrollIntoView();
      return sectionId;
    };
    const updateSectionId = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setSectionId(scrollY > lastScrollY ? increase() : decrease());
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateSectionId);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionId]);
  return (
    <>
      <Header />
      <div className="Container">
        <div className="Content">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
