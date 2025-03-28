import React from "react";

import {AppMain,AppContainer} from '../styles/AppStyle.js'
import Navbar from "../components/NavBar.jsx";
import Sidebar from "../components/SideBar.jsx";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
    const location = useLocation();

    const hideLayout = ["/signup", "/signin"].includes(location.pathname.toLowerCase());
  return (
    <div className="App" style={AppContainer}>
      {!hideLayout &&<header className="App-header">
        <Navbar />
      </header>}
      <main style={AppMain}>
      {!hideLayout &&<Sidebar />}
        {children}
      </main>
    </div>
  );
};
const MainLayout2 = ({ children }) => {
  const location = useLocation();

  const hideLayout = ["/signup", "/signin"].includes(location.pathname.toLowerCase());
return (
  <div className="App" style={AppContainer}>
    {!hideLayout &&<header className="App-header">
      <Navbar />
    </header>}
    <main style={AppMain}>

      {children}
    </main>
  </div>
);
};

export default MainLayout2;
