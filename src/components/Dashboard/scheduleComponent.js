import React from 'react';
import styles from './scheduleComponent.module.css';
import AppointmentCard from './AppointmentCard';

function UpcomingSchedule() {
  const data = [
    { title: "Ophthalmologist", time: "10:00 AM" },
    { title: "Cardiologist", time: "12:30 PM" },
    { title: "Neurologist", time: "03:00 PM" },
  ];

  return (
    <div className={styles.card}>
      <h2>The Upcoming Schedule</h2>
      {data.map((item, idx) => (
        <AppointmentCard key={idx} {...item} />
      ))}
    </div>
  );
}

export default UpcomingSchedule;
