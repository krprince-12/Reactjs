import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './Pages/Home';
import  About  from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './App.css'
const App=()=>{
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/service" element={<Service />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </>
  );
};

export default App;