import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Nav from './components/nav'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
