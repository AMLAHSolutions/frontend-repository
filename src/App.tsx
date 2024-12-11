import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import ListingsPage from './ListingsPage'; // Ensure this is imported correctly
import LeafletMapComponent from './LeafletMapComponent';
import MetricsBanner from './MetricsBanner';
import Footer from './Footer';
import './App.css';

// A helper component to wrap conditional rendering logic
const ConditionalWrapper: React.FC = ({ }) => {
  const location = useLocation();
  const showExtras = location.pathname === '/'; // Only show extras on the main page
  return (
    <div className="App">
      {showExtras && <Header />}
      <Routes>
        <Route path="/" element={
          <div className="main-search">
            <h1 className="page-title">Find Real Estate and Get Your Dream Space</h1>
            <p className="subtext">We are a real estate agency that will help you find the best residence you dream of, let's discuss for your dream house?</p>
            <SearchBar />
          </div>
        } />
        <Route path="/results" element={<ListingsPage />} />
      </Routes>
      {showExtras && <LeafletMapComponent />}
      {showExtras && <MetricsBanner />}
      {showExtras && <Footer />}
    </div>
  );
};

function App() {
  useEffect(() => {
    document.title = "Find Real Estate and Get Your Dream Space";
  }, []);

  return (
    <BrowserRouter>
      <ConditionalWrapper />
    </BrowserRouter>
  );
}

export default App;
