import "./Footer.scss";
import footer_logo from "../../assets/svg/logo-footer.svg";
import { languages, legalLinks, visitLinks } from "../../mockup/MockupData";

import footer_lang from "../../assets/svg/lang_icon.svg";
import FooterFb from "../../assets/svg/footer-facebook";
import FooterIn from "../../assets/svg/footer-linkedin";
import FooterTwitter from "../../assets/svg/footer-twitter";
import FooterYt from "../../assets/svg/footer-youtube";
import Facebook2 from "../../assets/svg/facebook2";
import Linkedin2 from "../../assets/svg/linkedin2";
import Twitter2 from "../../assets/svg/twitter2";
import Youtube2 from "../../assets/svg/youtube2";

function Footer({ isActive }) {
  return (
    <div className={`footer ${isActive || "session-active"}`}>
      <div className="footer__wrapper">
        <div className="footer__social-wrapper">
          <div className="footer__social-channel">
            <p className="social-channel__title">Follow Us</p>
            <div className="social-channel__list">
              <a
                href="https://www.facebook.com/GameloftViet/?brand_redir=216238295505"
                className="social-channel__item"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook2 />
              </a>

              <a
                href="https://www.linkedin.com/company/gameloft/"
                className="social-channel__item"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin2 />
              </a>

              <a
                href="https://twitter.com/gameloft"
                className="social-channel__item"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter2 />
              </a>

              <a
                href="https://www.youtube.com/user/gameloft"
                className="social-channel__item"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube2 />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__top-container">
          <div className="footer__content">
            <div className="footer__social">
              <div className="footer__logo">
                <img src={footer_logo} alt="" />
              </div>

              <div className="footer__social-channel mobile">
                <p className="social-channel__title">Follow Us</p>
                <div className="social-channel__list">
                  <a
                    href="https://www.facebook.com/GameloftViet/?brand_redir=216238295505"
                    className="social-channel__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FooterFb />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/gameloft/"
                    className="social-channel__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FooterIn />
                  </a>

                  <a
                    href="https://twitter.com/gameloft"
                    className="social-channel__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FooterTwitter />
                  </a>

                  <a
                    href="https://www.youtube.com/user/gameloft"
                    className="social-channel__item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FooterYt />
                  </a>
                </div>
              </div>

              <div className="footer__lang mobile">
                <div className="dropdown-list">
                  <img src={footer_lang} alt="" className="lang-icon" />

                  <select className="dropdown-list__content">
                    {languages.map((option) => {
                      return (
                        <option
                          data-content={`<img src={footer_lang} alt="" />`}
                          key={option.value}
                          value={option.value}
                          className="dropdown-list__item"
                        >
                          {option.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="footer__othersite">
              <div className="footer__visit">
                <p className="title-text mobile">Visit</p>
                <ul className="link-list">
                  {visitLinks.map((item, index) => {
                    return (
                      <li className="link-item" key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="footer__legal">
                <p className="title-text mobile">Legal</p>
                <ul className="link-list">
                  {legalLinks.map((item, index) => {
                    return (
                      <li className="link-item" key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom-container">
          <div className="footer__copyright">
            <p>
              ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft
              logo are trademarks of Gameloft in the U.S. and/or other
              countries.
            </p>
            <p>
              All other trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
