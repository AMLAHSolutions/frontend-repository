import React from 'react';
import Logo from './assets/AA2 White.png'; // Adjust path if necessary

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="login-modal-left">
          {/* Logo at the top */}
          <img src={Logo} alt="Logo" className="modal-logo" />
          <div className="welcome-back">
            <h2>Welcome Back!</h2>
            <p>To continue with us please Sign Up with your personal info</p>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>

        <div className="login-modal-right">
          <h2>Log In</h2>
          <form>
            <input type="email" placeholder="Your email address" required />
            <input type="password" placeholder="Password" required />
            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          
          <p>Or join with</p>
          <div className="social-icons">
            {/* Add social icons for LinkedIn, Google, and Facebook */}
            <i className="icon linkedin">in</i>
            <i className="icon google">G</i>
            <i className="icon facebook">f</i>
          </div>

          <p>Not a member yet? <a href="/signup">Sign Up Now!</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
