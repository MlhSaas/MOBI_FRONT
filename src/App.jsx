import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/loginPage.jsx';
import CreateEluPage from './pages/createEluPage.jsx';
import EluPage from './pages/EluPage.jsx';
import './App.css'
import DashboardPage from "./pages/DashboardPage.jsx";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createElu" element={<CreateEluPage />} />
        <Route path="/elu" element={<EluPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App
