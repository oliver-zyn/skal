import { List, X } from "phosphor-react";
import { useState } from "react";
import skalLogoImg from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

import "./style.css";

export function Header() {
  const [isMobileButtonActive, setIsMobileButtonActive] = useState(false);

  window.onscroll = () => setIsMobileButtonActive(false)

  return (
    <header className="header-page" onScroll={()=> setIsMobileButtonActive(false)}>
      <div className={isMobileButtonActive ? "active" : ""}>
        <div className="logo">
          <img src={skalLogoImg} alt="logo skal" />
        </div>
        <nav>
          <Link to="home" smooth={true}>
            Home
          </Link>
          <Link to="about" smooth={true} marginWidth={100}>About</Link>
          <Link to="roadmap" smooth={true}>RoadMap</Link>
          <Link to="team" smooth={true}>Team</Link>
        </nav>
        <div className="header-buttons">
          <div>
            <span>PT</span>
            <span>🇧🇷</span>
          </div>
          <button className="btn-connect">Connect Wallet</button>
        </div>
        <button
          className="btn-mobile"
          onClick={() => setIsMobileButtonActive(!isMobileButtonActive)}
        >
          {isMobileButtonActive ? <X size={32} /> : <List size={32} />}
        </button>
      </div>
    </header>
  );
}
