<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import Register from './pages/Register.jsx';
import Login from './pages/loginPage.jsx';
import Home from './pages/Home.jsx';
import CreateEluPage from './pages/createEluPage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createElu" element={<CreateEluPage />} />
    </Routes>
  );
>>>>>>> 82966b0 (Add Elu Welcome Page)
}

export default App;
