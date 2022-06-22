
import './App.css';
import NavigationBar from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>  
        <Route  path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
