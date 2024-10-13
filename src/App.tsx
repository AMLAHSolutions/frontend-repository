import React, { useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar'; // Import the SearchBar component
import Footer from './Footer';

function App() {
  // Set the title of the webpage when the component mounts
  useEffect(() => {
    document.title = "Find Real Estate and Get Your Dream Space";
  }, []);

  return (
    <div className="App">
      <div className="main">
        {/* Display the main title */}
        <h1 className="page-title">Find Real Estate and Get Your Dream Space</h1>
        {/* Display the subtext */}
        <p className="subtext">We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?</p>
        {/* Render the SearchBar component */}
        <SearchBar />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
