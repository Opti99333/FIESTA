import { useState, useEffect } from "react";
import doggy from "../assets/dog_avatar (2).png";
import "../styles/header.css";
import twIcon from "../assets/Twitter.png";
import tgIcon from "../assets/Telegram.png";
import BuyButton from "../assets/Buy-button.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav className="header-nav">
        <div className="left-wrap">
          <button
            className={`burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggle}
          >
            <span /><span /><span />
          </button>

          <div className="socials desktop-only">
            <a className="social-btn ring social-icon-animation" href="https://t.me/FIESTA_DOG" target="_blank" rel="noreferrer" aria-label="Telegram">
              <img src={tgIcon} alt="Telegram" className="social-icon" />
            </a>
            <a className="social-btn ring social-icon-animation" href="https://x.com/FIESTA__DOG" target="_blank" rel="noreferrer" aria-label="Twitter/X">
              <img src={twIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>

        <div className="BallBig">
          <img src={doggy} alt="Mascot" />
        </div>

        <a className="buy-link" href="https://dexscreener/token/Bwidms8XER3nXtqDiTGoyZhw4cVm7Xwf6Lsa3RwrrUmW">
          <span className="buy-wrap">
            <img className="BuyButton BuyButton-hover" src={BuyButton} alt="Buy" />
          </span>
        </a>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <a className="mobile-link" href="https://t.me/FIESTA_DOG" target="_blank" rel="noreferrer" onClick={close}>
          <img src={tgIcon} alt="Telegram" /> Telegram
        </a>
        <a className="mobile-link" href="https://x.com/FIESTA_DOGGO" target="_blank" rel="noreferrer" onClick={close}>
          <img src={twIcon} alt="Twitter" /> Twitter
        </a>
        <a className="mobile-link primary" href="https://dexscreener/token/Bwidms8XER3nXtqDiTGoyZhw4cVm7Xwf6Lsa3RwrrUmW" onClick={close}>
          <img src={BuyButton} alt="Buy" /> Buy
        </a>
      </div>

      {open && <div className="backdrop" onClick={close} aria-hidden="true" />}
    </header>
  );
}