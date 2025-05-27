import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import DashboardMainContent from './components/Dashboard/DashboardMainContent';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}


export default App;
