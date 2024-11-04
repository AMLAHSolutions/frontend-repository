import React, { useEffect } from 'react';
import Header from './Header'; // Import the Header component
import SearchBar from './SearchBar'; // Import the SearchBar component
import Footer from './Footer';
import LeafletMapComponent from './LeafletMapComponent'; // Updated import
import MetricsBanner from './MetricsBanner';
import './App.css'; // Make sure to import the CSS file

function App() {
  // Set the title of the webpage when the component mounts
  useEffect(() => {
    document.title = "Find Real Estate and Get Your Dream Space";
  }, []);

  return (
    <div className="App">
      {/* Header component will be placed at the top */}
      <Header />
      
      <div className="main-search"> 
        {/* Only this section will have the background image */}
        <h1 className="page-title">Find Real Estate and Get Your Dream Space</h1>
        <p className="subtext">We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?</p>
        <SearchBar />
      </div>
      
      {/* The rest of the page components will follow, without the background image */}
      <LeafletMapComponent />
      <MetricsBanner />
      <Footer />
    </div>
  );
}

export default App;
