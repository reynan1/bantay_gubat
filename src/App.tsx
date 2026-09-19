import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Effect from './pages/Effect';

function App() {

  return (
    <Router>
      <Header />
      <Hero />
       <main className='w-[83%] !mx-auto '>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/effects" element={<Effect />} />
            <Route path="/causes" element={<Navigate to="/" replace />} />
        </Routes>
       </main>
      <Footer />

    </Router>   
  )
}

export default App
