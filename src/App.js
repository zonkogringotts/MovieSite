import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element ={<Home />}/>
        <Route path = "/home" element ={<Home />}/>


      </Routes>
        
      </BrowserRouter>
        
    </div>
  );
}

 
