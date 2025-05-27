import React from 'react';
import styles from './ActivityFeed.module.css';

function ActivityFeed() {
  return (
    <div className={styles.card}>
      <h2>Activity</h2>
      <p>3 appointments this week</p>
      <div className={styles.bars}>
        {[50, 80, 40, 60, 100, 70].map((height, i) => (
          <div key={i} className={styles.bar} style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
