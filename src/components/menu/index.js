import React, { useEffect, useState } from 'react';
import ScrollTo from 'react-scroll-into-view';
import { useDetectScroll } from '@smakss/react-scroll-direction';
import './Menu.scss';
const Menu = ({ cards }) => {
  const [scrollDir] = useDetectScroll({});
  console.log(scrollDir);
  return (
    <nav id="menu">
      <ul>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((section) => {
          return (
            <li key={section}>
              <ScrollTo selector={`#card${section}`}>
                <button></button>
              </ScrollTo>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
