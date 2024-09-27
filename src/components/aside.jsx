import "../styleSheet/aside.css";
import { ReactComponent as HomeLogo } from "../images/icons/Aside/Home.svg";
import { ReactComponent as ARLogo } from "../images/icons/Aside/AR.svg";
import { ReactComponent as AboutLogo } from "../images/icons/Aside/About.svg";
import { ReactComponent as ShareLogo } from "../images/icons/Aside/Share.svg";

const Aside = () => {
  return (
    <div className="aside">
      <ul className="nav-list-top" typeof="none">
        <a href="/celestro">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <HomeLogo />
              </div>
              <div className="nav-name">Home</div>
            </div>
          </li>
        </a>
        <a href="/celestro/ar">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <ARLogo />
              </div>
              <div className="nav-name">AR</div>
            </div>
          </li>
        </a>
        <a href="/celestro/about">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <AboutLogo />
              </div>
              <div className="nav-name">About</div>
            </div>
          </li>
        </a>
      </ul>
      <ul className="nav-list-bottom">
        <li className="nav-list-item-bottom">
          <div className="sub-container-hr">
            <hr className="hr" />
          </div>
        </li>
        <li className="nav-list-item-bottom">
          <div className="sub-container">
            <div className="nav-logo">
              <ShareLogo />
            </div>
            <div className="nav-name">Share</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
