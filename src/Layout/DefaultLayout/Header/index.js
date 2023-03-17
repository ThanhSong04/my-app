import React from 'react';
import './Header.scss';

function Header() {
  const PublicURL = process.env.PUBLIC_URL;
  return (
    <header className="Header">
      <div className="HeaderLogo">
        <img src={PublicURL + '/Logo.png'} alt="Logo" />
      </div>
      <div className="HeaderMenu">
        <img src={PublicURL + '/Group_350.png'} alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
