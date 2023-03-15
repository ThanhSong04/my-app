import React from 'react';
import './Header.scss';
import Logo from '../../../assets/img/Logo.png';
import Menu from '../../../assets/img/Group_350.png';
function Header() {
  return (
    <header className="Header">
      <div className="HeaderLogo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="HeaderMenu">
        <img src={Menu} alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
