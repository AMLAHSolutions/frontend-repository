// src/MetricsBanner.tsx
import React from 'react';
import './App.css'; // Since you've incorporated everything into App.css

const MetricsBanner: React.FC = () => {
  return (
    <div className="metrics-banner">
      <div className="metric">
        <h2>13 +</h2>
        <p>Properties Listed</p>
      </div>
      <div className="metric">
        <h2>4k +</h2>
        <p>Property Deals</p>
      </div>
      <div className="metric">
        <h2>22k +</h2>
        <p>Awards Won</p>
      </div>
    </div>
  );
};

export default MetricsBanner;
