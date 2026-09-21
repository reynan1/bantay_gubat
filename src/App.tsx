import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Definition from './pages/Definition';
import Causes from './pages/Causes';
import About from './pages/About';
import Effects from './pages/Effects';
import StakeHolders from './pages/StakeHolders';
import Gallery from './pages/Gallery';

function App() {

  return (
    <Router>
      <Header />
      <Hero />
       <main className="!mx-auto w-full max-w-[1600px] !px-3 sm:!px-5 md:w-[92%] md:!px-0 xl:w-[86%] 2xl:w-[82%]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/definition" element={<Definition />} />
            <Route path="/causes" element={<Causes/>} />
            <Route path="/effects" element={<Effects />} />
            <Route path="/stakeholders" element={<StakeHolders />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
        </Routes>
       </main>
      <Footer />

    </Router>   
  )
}

export default App
