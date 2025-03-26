import React from "react";
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import './styles/AppStyle.js';
import HomeScreen from "./screens/Home";
import CoursDomain from "./screens/CoursDomainPage";
import Cours from "./screens/Cours";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";
import {AppMain,AppContainer} from './styles/AppStyle.js'


function App() {
  
  return (
    <div className="App" style={AppContainer} >
      <header className="App-header">
        <Navbar />
      </header>

      <main
        style={AppMain}
      >
        <SideBar />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cours-domain" element={<CoursDomain />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </div>
  );
}
function App2() {
  
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <main
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          minHeight: 0,
          backgroundColor: "#f8fafc",
        }}
      >
        <SignUp/>
      </main>
    </div>
  );
}

export default App;

