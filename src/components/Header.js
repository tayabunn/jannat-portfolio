'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header id="header" className="header d-flex justify-content-between">
      {/* Navigation Menu Start */}
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            <li className="menu__item">
              <Link className="menu__link btn" href="#home">
                <span className="menu__caption">Home</span>
                <i className="ph-bold ph-house-simple"></i>
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link btn" href="#portfolio">
                <span className="menu__caption">Portfolio</span>
                <i className="ph-bold ph-squares-four"></i>
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link btn" href="#about">
                <span className="menu__caption">About Me</span>
                <i className="ph-bold ph-user"></i>
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link btn" href="#resume">
                <span className="menu__caption">Resume</span>
                <i className="ph-bold ph-article"></i>
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link btn" href="#contact">
                <span className="menu__caption">Contact</span>
                <i className="ph-bold ph-envelope"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Navigation Menu End */}

      {/* Header Controls Start */}
      <div className="header__controls d-flex justify-content-end">
        <button id="color-switcher" className="color-switcher header__switcher btn" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
        <a id="notify-trigger" className="header__trigger btn" href="mailto:example@example.com?subject=Message%20from%20your%20site">
          <span className="trigger__caption">Let's Talk</span>
          <i className="ph-bold ph-chat-dots"></i>
        </a>
      </div>
      {/* Header Controls End */}
    </header>
  );
}
