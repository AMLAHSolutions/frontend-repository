import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ListingsPage: React.FC = () => {
  const location = useLocation();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const queryParams = new URLSearchParams(location.search);
      try {
        const response = await fetch(`http://localhost:5000/houses/search?${queryParams}`);
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Failed to fetch data from the server.');
        }
        const jsonData = await response.json();
        setData(jsonData.data); // Backend returns data in a "data" field
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
        setData([]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [location.search]);

  return (
    <div>
      <h1>Search Listings</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : data.length > 0 ? (
        data.map((item) => (
          <div key={item.house_id}>
            <p>
              <strong>Address:</strong> {item.street}, {item.city}
            </p>
            <p>
              <strong>Price:</strong> {item.price || item.monthly_price}
            </p>
          </div>
        ))
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
};

export default ListingsPage;
