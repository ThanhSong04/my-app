import React from 'react';
import './Footer.scss';
import FooterLogo from '../../../assets/img/footer__Logo.png';
import Facebook from '../../../assets/img/footer_facebook.png';
import Linkedin from '../../../assets/img/footer_linkedin.png';
import Twitter from '../../../assets/img/footer_twitter.png';
import Youtube from '../../../assets/img/footer_youtube.png';
import language from '../../../assets/img/footer_language.png';

function Footer() {
  return (
    <div className="WarpperFooter">
      <div className="FooterTop">
        <div className="FooterMain">
          <div className="MainLeft">
            <div className="FooterLogo">
              <img src={FooterLogo} alt="Footer Logo" />
            </div>
            <div className="FooterUs">
              <span className="UsTitle">Follow Us</span>
              <ul className="FooterSocial">
                <li className="FooterSocialItem">
                  <img src={Facebook} />
                </li>
                <li className="FooterSocialItem">
                  <img src={Linkedin} />
                </li>
                <li className="FooterSocialItem">
                  <img src={Twitter} />
                </li>
                <li className="FooterSocialItem">
                  <img src={Youtube} />
                </li>
              </ul>
            </div>
            <div className="language">
              <img src={language} />
              <select name="language" id="language">
                <option value="english">English</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="korean">Korean</option>
              </select>
            </div>
          </div>
          <div className="LinksOther">
            <div className="LinksOtherItem">
              <h3 className="LinksOtherTitle">visit</h3>
              <ul className="LinkList">
                <li className="LinkListItem">
                  <a href="#">Gameloft Games</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Gameloft Careers </a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Gameloft News</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Gameloft Forum</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Gameloft Corporate</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Gameloft Advertising</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Gameloft Support</a>
                </li>
              </ul>
            </div>
            <div className="LinksOtherItem">
              <h3 className="LinksOtherTitle">LEGAL</h3>
              <ul className="LinkList">
                <li className="LinkListItem">
                  <a href="#"> Terms of Use</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Cookies Policy</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">EULA</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Legal Notices</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Event Rules</a>
                </li>
                <li className="LinkListItem">
                  <a href="#">Business Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <p>
          ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S.
          and/or other countries. <br />
          All other trademarks are the property of their respective owners.
        </p>
      </div>
    </div>
  );
}

export default Footer;
