import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchFilters {
  propertyType: string;
  city: string;
  priceMin: number;
  priceMax: number;
  option: 'buy' | 'rent' | '';
}

const SearchBar: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    propertyType: '',
    city: '',
    priceMin: 0,
    priceMax: 1000000,
    option: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === "priceMin" || name === "priceMax" ? parseInt(value, 10) : value,
    }));
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters) => ({ ...prevFilters, option: e.target.value as 'buy' | 'rent' }));
  };

  const handleSearch = () => {
    // Ensure the type is mapped to the expected backend values
    const type = filters.option === 'buy' ? 'for_sale' : 'rental'; // "for_sale" or "rental"
    
    // Construct the URLSearchParams object for the query parameters
    const params = new URLSearchParams({
      type, // rental or for_sale
      ...(filters.propertyType && { property_type: filters.propertyType }), // If property type is selected
      ...(filters.city && { city: filters.city.replace(/ /g, "%20") }), // Ensure spaces are encoded as %20
      ...(filters.priceMin > 0 && { price_min: filters.priceMin.toString() }), // Min price filter
      ...(filters.priceMax < 1000000 && { price_max: filters.priceMax.toString() }), // Max price filter
    });
  
    // Redirect to the correct route using navigate with the updated URL
    navigate(`/houses/search?${params.toString()}`);
  };
  

  return (
    <div className="search-bar">
      <select name="option" value={filters.option} onChange={handleOptionChange}>
        <option value="">Select Type</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>
      <select name="propertyType" value={filters.propertyType} onChange={handleInputChange}>
        <option value="">Property Type</option>
        <option value="houses">Houses</option>
        <option value="townhouses">Townhouses</option>
        <option value="condos">Condos</option>
        <option value="lots">Lots</option>
        <option value="apartments">Apartments</option>
        <option value="any">Any</option>
      </select>
      <input
        type="text"
        name="city"
        placeholder="City"
        value={filters.city}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="priceMin"
        placeholder="Min Price"
        value={filters.priceMin}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="priceMax"
        placeholder="Max Price"
        value={filters.priceMax}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
