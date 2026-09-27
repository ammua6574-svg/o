import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white transition-colors duration-300 dark:bg-navy-950">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}

export default App