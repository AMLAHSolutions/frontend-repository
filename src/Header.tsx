import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import WhiteLogo from './assets/AA2 White.png';
import BlackLogo from './assets/AA2 Black.png';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isResultsPage = location.pathname === '/results';

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/'); // Navigate to the Main Page
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <header className={`header ${isResultsPage ? 'results-header' : ''}`}>
      <div className={`header-container ${isResultsPage ? 'results-page' : ''}`}>
        <div className="logo">
          <a href="/" onClick={handleLogoClick}>
            <img src={isResultsPage ? BlackLogo : WhiteLogo} alt="Logo" />
          </a>
        </div>

        <nav className="nav-links">
          <a href="/properties" className={isResultsPage ? 'results-page' : ''}>Properties</a>
          <a href="/services" className={isResultsPage ? 'results-page' : ''}>Services</a>
          <a href="/about" className={isResultsPage ? 'results-page' : ''}>About Us</a>
        </nav>

        <div className="login">
          <FaUserCircle className="user-icon" style={{ color: isResultsPage ? 'black' : 'white' }} />
          <button onClick={handleLoginClick} style={{ color: isResultsPage ? 'black' : 'white' }}>Log In</button>
        </div>
      </div>

      {isLoginModalOpen && <LoginModal onClose={handleCloseModal} />}
    </header>
  );
};

export default Header;
