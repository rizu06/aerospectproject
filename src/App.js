import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contactus"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import C17 from "./pages/C17"
import DragonXL from "./pages/DragonXL"
import SpaceX from "./pages/SpaceX"
import Grob from "./pages/Grob"
import Reven from "./pages/Reven"
import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <>
        <Navbar />
           <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route path='/aboutus' element={<About/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/dragonXL' element={<DragonXL/>} />
            <Route path='/spacex' element={<SpaceX/>} />
            <Route path='/c17' element={<C17/>} />
            <Route path='/grob' element={<Grob/>} />
            <Route path='/reven' element={<Reven/>} />
            <Route path='/contactus' element={<Contact/>} />
          </Routes>
        <Footer/>
       </>
    </Router>
  );
}

export default App;
