import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <SideBar/>
      </header>
    </div>
  );
}

export default App;
