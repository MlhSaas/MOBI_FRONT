import bgImg from '../assets/images/bgImg.png';
import '../styles/register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="left-side">
        <img src={bgImg} alt="background" />
      </div>
      <div className="right-side">
        <h4>SIGN UP</h4>
        <form>
          <div>
            <input type="email" name="email" placeholder="Enter your email" required />
          </div>
          <div>
            <input type="password" name="password" placeholder="Enter Password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
