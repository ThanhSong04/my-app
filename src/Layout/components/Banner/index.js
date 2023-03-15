import React from 'react';
import style from './Banner.scss';
import Share from '../../../assets/img/share.png';
import Mail from '../../../assets/img/mail.png';
import Support from '../../../assets/img/support.png';
import Rating from '../../../assets/img/rating.png';
import Nintendo from '../../../assets/img/nintendo.png';
import Microsoft from '../../../assets/img/microsoft.png';
import Steam from '../../../assets/img/steam.png';
function Banner() {
  return (
    <div className="BannerWrapper">
      <div className="Banner">
        <div className="WrapperDescription">
          <div className="Description">
            <div className="DescriptionTitle">
              <h2>Asphalt 9: Legends</h2>
              <div className="DescriptionAction">
                <span>Racing / Action</span>
                <div className="Rating">
                  <img src={Rating} alt="Rating" />
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
              <img src={Share} />
            </li>
            <li className="SocialItem">
              <img src={Mail} />
            </li>
            <li className="SocialItem">
              <img src={Support} />
            </li>
          </ul>
        </div>
      </div>
      <div className="WrapperStore">
        <div className="Store">
          <span className="StoreDownload">Download latest version</span>
          <div className="StoreTrademark">
            <div className="TrademarkItem">
              <img src={Nintendo} alt="nintendo" />
            </div>
            <div className="TrademarkItem">
              <img src={Microsoft} alt="Microsoft" />
            </div>
            <div className="TrademarkItem">
              <img src={Steam} alt="steam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
