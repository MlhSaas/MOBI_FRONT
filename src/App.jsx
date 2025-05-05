
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import EluPage from './pages/EluPage.jsx';
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/elu" element={<EluPage />} />
      </Routes>
    </Router>
  );
}

export default App
