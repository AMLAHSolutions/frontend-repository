import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import ListingsCards from './ListingsCards'; // Import the new component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const ListingsPage: React.FC = () => {
  const location = useLocation();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://127.0.0.1:5000/houses/search${location.search}`);
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Failed to fetch data from the server.');
        }
        const result = await response.json();
        setData(result.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div>
      <Header />
      <div className="results-container">
        <h1>Search Results</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : data.length > 0 ? (
          <ListingsCards properties={data} />
        ) : (
          <p>No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;
