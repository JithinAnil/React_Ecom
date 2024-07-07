import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';




function App() {
  return (
   <div className = 'container-fluid'>
      <NavBar/>
      <Home/>
      <Men/>
      <Women/>
      <Kids/>
      <Contact/>
    </div>
  );
}

export default App;
