import ScrollTo from 'react-scroll-into-view';
import './Menu.scss';
const Menu = ({ cards }) => {
  return (
    <nav id="menu">
      <ul>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((section) => {
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
