'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  PiHouseSimpleBold,
  PiSquaresFourBold,
  PiUserBold,
  PiArticleBold,
  PiEnvelopeBold,
  PiChatDotsBold,
  PiSunBold,
  PiMoonStarsBold,
} from 'react-icons/pi';
const navItems = [
  { label: 'Home',      href: '#home',      Icon: PiHouseSimpleBold },
  { label: 'Portfolio', href: '#portfolio', Icon: PiSquaresFourBold },
  { label: 'About Me',  href: '#about',     Icon: PiUserBold        },
  { label: 'Resume',    href: '#resume',    Icon: PiArticleBold     },
  { label: 'Contact',   href: '#contact',   Icon: PiEnvelopeBold    },
];

export default function Header() {
  const [activeIndex, setActiveIndex]   = useState(0);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check initial theme
    const storedTheme = localStorage.getItem('template.theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('color-scheme', storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('color-scheme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('template.theme', newTheme);
    document.documentElement.setAttribute('color-scheme', newTheme);
  };

  const handleScroll = (e, href, index) => {
    e.preventDefault();
    setActiveIndex(index);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header id="header" className="header d-flex justify-content-between">

      {/* Switchtab pill style */}
      <style>{`
        .switchtab-nav {
          position: relative;
        }
        .switchtab-item .menu__link {
          transition: all 0.3s ease;
          border: 1px solid transparent;
          border-radius: 999px;
        }
        /* Default / Dark theme active styles */
        .switchtab-item.is-active .menu__link {
          color: #fff !important;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        /* Light theme active styles */
        [color-scheme="light"] .switchtab-item.is-active .menu__link {
          color: #111 !important;
          border: 1px solid rgba(0, 0, 0, 0.4);
        }
      `}</style>

      {/* Navigation Menu Start */}
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list switchtab-nav d-flex justify-content-start">



            {navItems.map((item, i) => (
              <li
                key={item.href}

                className={`menu__item switchtab-item${activeIndex === i ? ' is-active' : ''}`}
              >
                <a 
                  className="menu__link btn" 
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href, i)}
                >
                  <span className="menu__caption">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Navigation Menu End */}

      {/* Header Controls Start */}
      <div className="header__controls d-flex justify-content-end">
        <button 
          id="color-switcher" 
          className="color-switcher header__switcher btn" 
          type="button" 
          role="switch" 
          aria-label="light/dark mode" 
          aria-checked={theme === 'dark'}
          onClick={toggleTheme}
        >
          <em></em>
          {theme === 'dark' ? <PiSunBold size={20} /> : <PiMoonStarsBold size={20} />}
        </button>
        <a id="notify-trigger" className="header__trigger btn" href="mailto:example@example.com?subject=Message%20from%20your%20site">
          <span className="trigger__caption">Let's Talk</span>
          <PiChatDotsBold size={18} />
        </a>
      </div>
      {/* Header Controls End */}

    </header>
  );
}
