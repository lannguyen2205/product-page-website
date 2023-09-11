import "./Header.scss";
import logo from "../../assets/svg/top-header_logo.svg";
import HamburgerIcon from "../../assets/svg/hambuger_icon.svg";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <img className="header-logo" src={logo} alt="" />
        <img className="hambuger_icon" src={HamburgerIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
