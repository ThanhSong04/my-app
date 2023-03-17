import React from 'react';
import './Footer.scss';

function Footer() {
  const PublicURL = process.env.PUBLIC_URL;
  return (
    <div className="warpper__footer">
      <div className="warpper__footer__content">
        <div className="footer__top">
          <div className="footer__main">
            <div className="main__left">
              <div className="footer__logo">
                <img src={PublicURL + '/footer__Logo.png'} alt="Footer Logo" />
              </div>
              <div className="footer__us">
                <span className="us__title">Follow Us</span>
                <ul className="footer__social">
                  <li className="footer__social__item">
                    <img src={PublicURL + '/footer_facebook.png'} alt="" />
                  </li>
                  <li className="footer__social__item">
                    <img src={PublicURL + '/footer_linkedin.png'} alt="" />
                  </li>
                  <li className="footer__social__item">
                    <img src={PublicURL + '/footer_twitter.png'} alt="" />
                  </li>
                  <li className="footer__social__item">
                    <img src={PublicURL + '/footer_youtube.png'} alt="" />
                  </li>
                </ul>
              </div>
              <div className="language">
                <img src={PublicURL + '/footer_language.png'} alt="" />
                <select name="language" id="language">
                  <option className="abc" value="english">
                    English
                  </option>
                  <option value="vietnamese">Vietnamese</option>
                  <option value="korean">Korean</option>
                </select>
              </div>
            </div>
            <div className="links__other">
              <div className="links__other__item">
                <h3 className="links__other__title">visit</h3>
                <ul className="link__list">
                  <li className="link__list__item">
                    <a href="/">Gameloft Games</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Gameloft Careers </a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Gameloft News</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Gameloft Forum</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Gameloft Corporate</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Gameloft Advertising</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Gameloft Support</a>
                  </li>
                </ul>
              </div>
              <div className="links__other__item">
                <h3 className="links__other__title">LEGAL</h3>
                <ul className="link__list">
                  <li className="link__list__item">
                    <a href="/"> Terms of Use</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Cookies Policy</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">EULA</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Legal Notices</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Event Rules</a>
                  </li>
                  <li className="link__list__item">
                    <a href="/">Business Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S.
            and/or other countries. <br />
            All other trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
