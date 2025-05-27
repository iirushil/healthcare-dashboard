import React from 'react';
import styles from './AppointmentCard.module.css';

function AppointmentCard({ title, time }) {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{time}</p>
    </div>
  );
}

export default AppointmentCard;
