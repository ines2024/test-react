
import { Carousel } from 'bootstrap';
import './App.css';
import Home from './components/Home';
import Navbarexample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './components/Carousel';



function App() {
  return (
    <div className="App">
    <Navbarexample/>
    <UncontrolledExample/>
    <Home/>
    
    </div>
  );
}

export default App;
