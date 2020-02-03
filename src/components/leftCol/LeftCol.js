import React from 'react';
import { work } from '../../resume.json';
import styles from './LeftCol.css';

const LeftCol = () => (
  <section className={styles.LeftCol}>
    <h2>Projects</h2>
    <ul>

    </ul>
    <h2>Work History</h2>
    <h3>{work.company}
      <span>{work.location}</span>
      <span>{work.startDate}</span> - <span>{work.endDate}</span>
    </h3>
    <h4>{work.title}</h4>
    <ul>

    </ul>
  </section>
);

export default LeftCol;
