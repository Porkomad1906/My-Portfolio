import React from "react";

import styles from "./Contact.module.css";
import { getImageurl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>If you would like to know about the best future software developer, don't hesitate to contact me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageurl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:justinmora599@gmail.com">justinmora599@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageurl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/justin-mora-6b2488317">linkedin.com/justin-mora-6b2488317</a>
        </li>
        <li className={styles.link}>
          <img src={getImageurl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Porkomad1906">github.com/Porkomad1906</a>
        </li>
      </ul>
    </footer>
  );
};