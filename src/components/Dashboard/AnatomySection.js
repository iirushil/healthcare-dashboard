import React from 'react';
import styles from './AnatomySection.module.css';

function AnatomySection() {
  return (
    <div className={styles.card}>
      <h2>Anatomy Overview</h2>
      <img src="https://th.bing.com/th/id/OIP.UeGPwPZ-Kt4VRCnxnjiupAHaIE?cb=iwc2&rs=1&pid=ImgDetMain" alt="Anatomy" className={styles.image} />
      <ul className={styles.labels}>
        <li className={styles.healthy}>Healthy Heart</li>
        <li className={styles.warning}>Lungs Issue</li>
        <li className={styles.ok}>Teeth</li>
        <li className={styles.ok}>Bone</li>
      </ul>
    </div>
  );
}

export default AnatomySection;
