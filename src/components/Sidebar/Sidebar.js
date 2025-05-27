import React from "react";
import styles from "./Sidebar.module.css";
import * as LucideIcons from "lucide-react"; // Import all icons as named exports

function Sidebar() {
  const sidebarLinks = [
    {
      title: "General",
      links: [
        { name: "Dashboard", icon: "layout-dashboard" },
        { name: "History", icon: "history" },
        { name: "Calendar", icon: "calendar" },
        { name: "Appointments", icon: "calendar-plus" },
        { name: "Statistics", icon: "bar-chart-2" },
        { name: "Tests", icon: "flask-conical" }
      ]
    },
    {
      title: "Tools",
      links: [
        { name: "Chat", icon: "message-circle" },
        { name: "Support", icon: "help-circle" }
      ]
    },
    {
      title: "",
      links: [
        { name: "Setting", icon: "settings" }
      ]
    }
  ];

  // Converts 'calendar-plus' -> 'CalendarPlus'
  const toPascalCase = (kebab) =>
    kebab
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.logoHighlight}>Health</span>care.
      </div>
      <nav className={styles.nav}>
        {sidebarLinks.map((section, i) => (
          <div key={i} className={styles.section}>
            {section.title && <p className={styles.sectionTitle}>{section.title}</p>}
            <ul className={styles.linkList}>
              {section.links.map((link, idx) => {
                const iconName = toPascalCase(link.icon);
                const Icon = LucideIcons[iconName] || LucideIcons.Circle; // fallback
                return (
                  <li key={idx} className={`${styles.linkItem} ${link.name === "Dashboard" ? styles.active : ""}`}>
                    <Icon size={18} strokeWidth={1.5} />
                    <span>{link.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
