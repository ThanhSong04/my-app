import { useState } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import ScrollTo from 'react-scroll-into-view';
import './DefaultLayout.scss';
import Header from './Header';
function DefaultLayout({ children }) {
  let [sectionId, setSectionId] = useState(1);
  const increase = () => {
    sectionId--;
    if (sectionId < 1) {
      return (sectionId = 1);
    }
    const element = document.getElementById(`card${sectionId}`);
    element.scrollIntoView();
    setSectionId(sectionId);
  };
  const decrease = () => {
    sectionId++;
    console.log('sectionId--', sectionId);
    if (sectionId > 5) {
      return (sectionId = 5);
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
      <ReactScrollWheelHandler
        upHandler={() => {
          increase();
        }}
        downHandler={() => {
          decrease();
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
