import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './styles/Landing.css';
import './styles/Auth.css';

// Create a separate component for the landing page content
function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to SimplyFly</h1>
        <p className="landing-subtitle">Book your next adventure with ease</p>
        <div className="landing-buttons">
          <button className="landing-button login-btn" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="landing-button register-btn" onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
