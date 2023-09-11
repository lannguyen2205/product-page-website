import "./Hotspot.scss";

import starfull from "../../assets/svg/star-full-icon.svg";
import star from "../../assets/svg/star-icon.svg";
import eshop from "../../assets/svg/eshop-img.svg";
import microsoft from "../../assets/svg/microsoft-img.svg";
import steam from "../../assets/svg/steam.svg";

function Hotspot({ isActive}) {
  return (
    <div className={`hotspot ${isActive || "session-active"}`}>
      <div className="hotspot__banner">
        <div className="banner__container">
          <div className="banner__content">
            <p className="banner__title section-title">Gameloft game</p>
            <div className="banner__typerate">
              <p className="banner__type">
                Racing / Action <span> | </span>
              </p>
              <div className="banner_rate">
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={star} alt="" />
              </div>
            </div>

            <div className="banner__desc text-subtitle-m">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hotspot__download">
        <div className="download__content">
          <p className="download__title">Download latest version </p>
          <div className="download__store-list">
            <div className="download__store-item">
              <img src={eshop} alt="" />
            </div>
            <div className="download__group-item">
              <div className="download__store-item">
                <img src={microsoft} alt="" />
              </div>
              <div className="download__store-item">
                <img src={steam} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotspot;
