import React, { useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar'; // Import the SearchBar component

function App() {
  // Set the title of the webpage when the component mounts
  useEffect(() => {
    document.title = "Find Real Estate and Get Your Dream Space";
  }, []);

  return (
    <div className="App">
      {/* Display the main title */}
      <h1 className="page-title">Find Real Estate and Get Your Dream Space</h1>
      {/* Display the subtext */}
      <p className="subtext">We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?</p>
      {/* Render the SearchBar component */}
      <SearchBar />
    </div>
  );
}

export default App;
