import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import ListingsPage from './ListingsPage'; // Ensure this is imported correctly
import Footer from './Footer';
import LeafletMapComponent from './LeafletMapComponent';
import MetricsBanner from './MetricsBanner';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Find Real Estate and Get Your Dream Space";
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
        <LeafletMapComponent />
        <MetricsBanner />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
