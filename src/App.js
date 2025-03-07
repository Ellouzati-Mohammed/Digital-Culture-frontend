import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import './styles/App.css';

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
        backgroundColor: "black",
        overflow: 'hidden',
        minHeight: 0 
      }}>
        <SideBar/>
        <div style={{
          flex: 1,
          backgroundColor: "red",
          overflow: 'hidden',
          height: '100%', 
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          gg
        </div>
      </main>
    </div>
  );
}

export default App;