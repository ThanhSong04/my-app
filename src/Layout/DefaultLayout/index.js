import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faEnvelope, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import ScrollTo from 'react-scroll-into-view';

import './DefaultLayout.scss';
import Header from './Header';
function DefaultLayout({ children }) {
  const PublicURL = process.env.PUBLIC_URL;
  let [sectionId, setSectionId] = useState(1);
  const decrease = () => {
    sectionId--;
    if (sectionId < 1) {
      sectionId = 1;
    }
    const element = document.getElementById(`card${sectionId}`);
    element.scrollIntoView();
    setSectionId(sectionId);
  };
  const increase = () => {
    sectionId++;
    if (sectionId > 5) {
      sectionId = 5;
    }
    const element = document.getElementById(`card${sectionId}`);
    element.scrollIntoView();
    setSectionId(sectionId);
  };
  return (
    <>
      <nav id="menu">
        <ul>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((section) => {
            return (
              <li key={section}>
                <ScrollTo selector={`#card${section}`}>
                  <button className={`${sectionId === section ? 'menu--active' : ''}`}></button>
                </ScrollTo>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="Social">
        <li className="SocialItem">
          <FontAwesomeIcon icon={faShareNodes} />
        </li>
        <li className="SocialItem">
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li className="SocialItem">
          <FontAwesomeIcon icon={faHeadphonesSimple} />
        </li>
      </ul>
      <ReactScrollWheelHandler
        upHandler={() => {
          decrease();
        }}
        downHandler={() => {
          increase();
        }}
        customStyle={{
          width: '150%',
          height: '100vh',
        }}
      >
        <div className="Container">
          <div className="Content">{children}</div>
        </div>
      </ReactScrollWheelHandler>
      <Header />
    </>
  );
}

export default DefaultLayout;
