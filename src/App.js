import React from "react";
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import './styles/App.css';
import HomeScreen from "./screens/Home";
import DomainPage from "./screens/DomainPage";


function App() {
  return (
    <div className="App" style={{ 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <header className="App-header">
        <Navbar/>
      </header>
      <main style={{ 
        flex: 1,
        display: 'flex',
        overflow: 'hidden',
        minHeight: 0 
      }}>
        <SideBar/>

        <DomainPage/>
      </main>
    </div>
  );
}

export default App;

