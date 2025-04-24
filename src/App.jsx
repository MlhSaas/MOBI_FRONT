
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
