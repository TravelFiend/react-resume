import React, { Component } from 'react';
import Header from '../components/header/Header';
import LeftCol from '../components/leftCol/LeftCol';
import RightCol from '../components/rightCol/RightCol';
import styles from './Resume.css';

class Resume extends Component {
  render(){
    return (
      <>
        <Header />
        <section className={styles.Bottom}>
          <LeftCol />
          <RightCol />
        </section>
      </>
    );
  }
}

export default Resume;
