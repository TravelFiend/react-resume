import React from 'react';
import githubLogo from '../../../assets/githubLogo.png';
import { header } from '../../resume.json';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <h1>{header.name}</h1>
    <span>{header.phone}</span>
    <span>{header.email}</span>
    <a href="https://www.github.com/TravelFiend">
      <img src={githubLogo} />/TravelFiend
    </a>
    <a href="https://www.linkedin.com/in/mikeegrace">/mikeegrace</a>
  </header>
);

export default Header;
