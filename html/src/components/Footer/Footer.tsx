// components/Footer/Footer.tsx
import React from 'react';
import discordLogoUrl from '/discord-logo.svg';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <a href="https://discord.derpgame.net" target="_blank" rel="noopener">
        <div className={styles.logoWrapper}>
          <img
            src={discordLogoUrl}
            alt="Discord Logo"
            className={styles.logo}
          />
        </div>
      </a>
      <span className={styles.text}>Join us on Discord</span>
    </div>
  </footer>
);

export default Footer;
