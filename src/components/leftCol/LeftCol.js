import React from 'react';
import { projects, work } from '../../resume.json';
import styles from './LeftCol.css';

const LeftCol = () => {
  const projectElements = projects.map((project, i) => (
    <li key={i}>
      <h4>{project.name}</h4>
      <h6>{project.stack}</h6>
      <p>{project.desc}</p>
    </li>
  ));

  return (
    <section className={styles.LeftCol}>
      <h2>Projects</h2>
      <ul>
        {projectElements}
      </ul>
      <h2>Work History</h2>
      <h3>{work.company}
        <span>{work.location}</span>
        <span>{work.startDate}</span> - <span>{work.endDate}</span>
      </h3>
      <h4>{work.title}</h4>
      <ul>
        {}
      </ul>
    </section>
  );
};

export default LeftCol;
