import React, {useState} from 'react';
import styles from "./Navbar.module.css"
import {getImageurl} from "../../utils"

export const Navbar = () => {
  //UseState que maneja el estado del menu de hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);
  const handleTitleClick = (event) => {
    event.preventDefault();

    if (typeof window === "undefined") {
      return;
    }

    window.history.pushState({}, "", import.meta.env.BASE_URL);
    window.scrollTo({ top: 0, left: 0 });
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a
        className={styles.title}
        href={import.meta.env.BASE_URL}
        onClick={handleTitleClick}
      >
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageurl("nav/closeIcon.png")
              : getImageurl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};