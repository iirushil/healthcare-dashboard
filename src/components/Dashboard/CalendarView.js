import React from 'react';
import styles from './CalendarView.module.css';

function CalendarView() {
  return (
    <div className={styles.card}>
      <h2>October 2021</h2>
      <div className={styles.grid}>
        {[...Array(30)].map((_, i) => (
          <div key={i} className={styles.day}>
            {i + 1}
            {i % 7 === 0 && <div className={styles.dot}>09:00</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
