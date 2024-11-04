import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Logo from './assets/AA2 White.png'; // Import the image from assets

const Header: React.FC = () => {

  // Function to reload the page and navigate to the homepage
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = '/'; // Navigate to the homepage
    window.location.reload();   // Force refresh the page
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/" onClick={handleLogoClick}>
            {/* Use the imported logo */}
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/properties">Properties</a>
          <a href="/services">Services</a>
          <a href="/about">About Us</a>
        </nav>

        {/* Log In */}
        <div className="login">
          <FaUserCircle className="user-icon" />
          <a href="/login">Log In</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
