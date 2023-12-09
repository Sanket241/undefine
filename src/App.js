
import './App.css';
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Owner from './Component/Pages/Owner'
import User from './Component/Pages/User'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Partner from './Component/Pages/Partner';
import Transfer from './Component/Pages/Transfer';
import Navi from './Component/Pages/Navi';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>

  <Routes>

    <Route path="/" element={ <Home/> }   />
    <Route path="/about" element={ <About/> }   />
    <Route path="/user" element={ <User/> }   />
    <Route path="/owner" element={ <Owner/> }   />
    <Route path="navi" element={<Navi/>} />
    <Route path="/partner/" element={ <Partner/> }   />
    <Route path="transfer" element={<Transfer/>} />

  </Routes>
  <Footer/>
  </BrowserRouter>
  
  
  </>
  );
}

export default App;
