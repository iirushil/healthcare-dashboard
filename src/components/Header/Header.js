 import React from "react";
import styles from "./Header.module.css";
import { Bell, Plus } from "lucide-react";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.icon}>
          <Bell />
        </div>

        <div className={styles.profile}>
         <img src="https://i.pravatar.cc/32" alt="User" className={styles.avatar} />
          <span className={styles.name}>Dr. Sarah</span>
        </div>

        <button className={styles.addButton}>
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
}

export default Header;
