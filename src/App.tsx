import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Effect from './pages/Effect';
import StakeHolders from './pages/StakeHolders';
import Gallery from './pages/Gallery';

function App() {

  return (
    <Router>
      <Header />
      <Hero />
       <main className='w-[83%] !mx-auto '>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/causes" element={<Navigate to="/" replace />} />
            <Route path="/effects" element={<Effect />} />
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
