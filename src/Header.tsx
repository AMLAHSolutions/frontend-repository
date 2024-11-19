// src/Header.tsx
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Logo from './assets/AA2 White.png';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.href = '/';
    window.location.reload();
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/" onClick={handleLogoClick}>
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <nav className="nav-links">
          <a href="/properties">Properties</a>
          <a href="/services">Services</a>
          <a href="/about">About Us</a>
        </nav>

        <div className="login">
          <FaUserCircle className="user-icon" />
          <button onClick={handleLoginClick}>Log In</button>
        </div>
      </div>

      {isLoginModalOpen && <LoginModal onClose={handleCloseModal} />}
    </header>
  );
};

export default Header;
