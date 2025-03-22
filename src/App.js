import React from "react";
import {Navbar,Navbar2} from './components/navbar';
import SideBar from './components/sidebar';
import './styles/App.css';
import HomeScreen from "./screens/Home";
import DomainPage from "./screens/DomainPage";
import CoursDomain from "./screens/CoursDomainPage";
import Cours from "./screens/Cours";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App" style={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      
    }}>
      <header className="App-header">
        <Navbar2/>
      </header>
      <main style={{ 
        flex: 1,
        display: 'flex',
        overflow: 'hidden',
        minHeight: 0 ,
        backgroundColor:"#f8fafc",
      }}>
        <SideBar/>
        
        <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/domain" element={<DomainPage />} />
              <Route path="/cours-domain" element={<CoursDomain />} />
              <Route path="/cours" element={<Cours />} />
        </Routes>
      </main>
    </div>
     
  );
}

export default App;

