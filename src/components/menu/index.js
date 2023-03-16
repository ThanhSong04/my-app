import React from 'react';
import ScrollTo from 'react-scroll-into-view';
import './Menu.scss';
const Menu = ({ cards }) => (
  <nav id="menu">
    <ul>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((card) => {
        console.log(card);
        return (
          <li key={card}>
            <ScrollTo selector={`#card${card}`}>
              <button></button>
            </ScrollTo>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Menu;
