// src/SearchBar.tsx
import React, { useState } from 'react';

// Define types for form fields
interface SearchFilters {
  propertyType: string;
  city: string;
  price: string;
  option: string;
}

const SearchBar: React.FC = () => {
  // State to store the form inputs
  const [filters, setFilters] = useState<SearchFilters>({
    propertyType: '',
    city: '',
    price: '',
    option: 'buy',
  });

  // Handle the selection of Buy or Rent
  const handleOptionChange = (option: string) => {
    setFilters({ ...filters, option });
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Submit handler
  const handleSearch = () => {
    console.log(filters);
    // Call the API or perform the search logic
  };

  return (
    <div className="search-bar">
      <div className="option-buttons">
        <button 
          className={filters.option === 'buy' ? 'active' : ''}
          onClick={() => handleOptionChange('buy')}
        >
          Buy
        </button>
        <button 
          className={filters.option === 'rent' ? 'active' : ''}
          onClick={() => handleOptionChange('rent')}
        >
          Rent
        </button>
      </div>
      
      <select name="propertyType" onChange={handleInputChange} value={filters.propertyType}>
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="condo">Condo</option>
      </select>

      <input 
        type="text" 
        name="city" 
        placeholder="Search by city" 
        value={filters.city} 
        onChange={handleInputChange}
      />

      <input 
        type="text" 
        name="price" 
        placeholder="Price" 
        value={filters.price} 
        onChange={handleInputChange}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
