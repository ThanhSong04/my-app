import React, { useEffect, useState } from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Menu.scss';
const Menu = ({ cards }) => {
  return (
    <nav id="menu">
      <ul>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((section) => {
          return (
            <li key={section}>
              <ScrollTo selector={`#card${section}`} style={{ section }}>
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
