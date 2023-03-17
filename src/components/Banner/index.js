import React from 'react';
import './Banner.scss';
function Banner() {
  const PublicURL = process.env.PUBLIC_URL;
  return (
    <div className="banner__wrapper">
      <div className="banner">
        <div className="wrapper__description">
          <div className="description">
            <div className="description__title">
              <h2>Asphalt 9: Legends</h2>
              <div className="description__action">
                <span>Racing / Action</span>
                <div className="rating">
                  <img src={PublicURL + '/rating.png'} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="DescriptionContent">
              Here is a game that breaks the rules. A game for all the dreamers, the outsiders and the rebels who refuse
              to follow guidelines and who cannot accept the status quo.
            </div>
          </div>
          <ul className="Social">
            <li className="SocialItem">
              <img src={PublicURL + '/share.png'} />
            </li>
            <li className="SocialItem">
              <img src={PublicURL + '/mail.png'} />
            </li>
            <li className="SocialItem">
              <img src={PublicURL + '/support.png'} />
            </li>
          </ul>
        </div>
      </div>
      <div className="WrapperStore">
        <div className="Store">
          <span className="StoreDownload">Download latest version</span>
          <div className="StoreTrademark">
            <div className="TrademarkItem">
              <img src={PublicURL + '/nintendo.png'} alt="nintendo" />
            </div>
            <div className="TrademarkItem">
              <img src={PublicURL + '/microsoft.png'} alt="Microsoft" />
            </div>
            <div className="TrademarkItem">
              <img src={PublicURL + '/steam.png'} alt="steam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
