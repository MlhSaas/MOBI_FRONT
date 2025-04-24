import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/images/bgImg.png';
import '../styles/register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/auth/register-collectivite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { 
                nom: name,
                email, 
                password 
            })
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        navigate('/home');
      } else {
        console.error("Erreur lors de l'inscription");
      }
      
    } catch (err) {
      console.error('Erreur lors de l’inscription :', err);
    }
  };

  return (
    <div className="register-container">
      <div className="left-side">
        <img src={bgImg} alt="background" />
      </div>
      <div className="right-side">
        <h4>SIGN UP</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={name} name="nom" onChange={e => setName(e.target.value)} placeholder="Enter community name" required />
          </div>
          <div>
            <input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          <div>
            <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="Enter Password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
