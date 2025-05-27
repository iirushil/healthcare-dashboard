import React from 'react';
import styles from './DashboardMainContent.module.css';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import ActivityFeed from './ActivityFeed';
import UpcomingSchedule from './scheduleComponent';

function DashboardMainContent() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <AnatomySection />
        <CalendarView />
      </div>
      <div className={styles.bottom}>
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardMainContent;
