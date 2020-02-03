import React from 'react';
import { about, techKnowledge, education } from '../../resume.json';
import styles from './RightCol.css';

const RightCol = () => {
  const techElements = techKnowledge.map((item, i) => (
    <li key={i} className={styles.TechKnowledge}>
      {item}
    </li>
  ));

  let achievementElements;
  const educationElements = education.map((school, i) => {
    if(school.achievements){
      achievementElements = school.achievements.map((achievement, i) => (
        <li key={i}>{achievement}</li>
      ));
    }
    
    return (
      <li key={i} className={styles.Education}>
        <h4>{school.school}</h4>
        <p>{school.focus}</p>
        <ul>
          {achievementElements}
        </ul>
      </li>
    );
  });

  return (
    <div className={styles.RightCol}>
      <h2>Background &amp; Profile</h2>
      <p>{about}</p>
      <h2>Tech Knowledge</h2>
      <ul>
        {techElements}
      </ul>
      <h2>Academic Background</h2>
      <ul>
        {educationElements}
      </ul>
    </div>
  );
};

export default RightCol;
