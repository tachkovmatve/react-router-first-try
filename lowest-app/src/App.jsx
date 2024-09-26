import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router, Link,  } from "react-router-dom";
import './index.css'
import Menu from "./pages/Menu/Menu";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About"
import Slider from "./pages/Slider/Slider";
import Contact from "./pages/Contact/Contact";

function App() {

  return (
    <>
      <Menu/>
      <div>
       <Routes>
        <Route path="hero" element={<Hero/>}/>  
        <Route path="about" element={<About/>}/>  
        <Route path="slider" element={<Slider/>}/>  
        <Route path="contact" element={<Contact/>}/>  
        <Route/>  
      </Routes>  
      </div>    
    </>

      
    
  )
}

export default App
