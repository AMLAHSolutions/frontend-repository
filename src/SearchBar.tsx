import React, { useState } from 'react';

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
    option: '', // No default selection
  });

  const [showPriceSlider, setShowPriceSlider] = useState(false);

  const handleOptionChange = (option: 'buy' | 'rent') => {
    setFilters({ ...filters, option });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "priceMin" || name === "priceMax") {
      setFilters({ ...filters, [name]: parseInt(value, 10) });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const togglePriceSlider = () => {
    setShowPriceSlider(!showPriceSlider);
  };

  const handleSearch = () => {
    const baseUrl = "/houses/search";
    const params = new URLSearchParams({
      type: filters.option === 'buy' ? 'for_sale' : 'rentals',
      property_type: filters.propertyType,
      city: filters.city.replace(/ /g, "%20"),
      price_min: filters.priceMin.toString(),
      price_max: filters.priceMax.toString(),
    });
    const searchUrl = `${baseUrl}?${params.toString()}`;
    window.location.href = searchUrl;
  };

  return (
    <div className="search-bar">
      <div className="option-buttons">
        <button className={filters.option === 'buy' ? 'active' : ''} onClick={() => handleOptionChange('buy')}>
          Buy
        </button>
        <button className={filters.option === 'rent' ? 'active' : ''} onClick={() => handleOptionChange('rent')}>
          Rent
        </button>
      </div>

      <select name="propertyType" onChange={handleInputChange} value={filters.propertyType}>
        <option value="">Property Type</option>
        <option value="houses">Houses</option>
        <option value="townhouses">Townhouses</option>
        <option value="condos">Condos</option>
        <option value="lots">Lots</option>
        <option value="apartments">Apartments</option>
        <option value="any">Any Property Type</option>
      </select>

      <input type="text" name="city" placeholder="Search by city..." value={filters.city} onChange={handleInputChange} />

      <button onClick={togglePriceSlider}>Price</button>
      {showPriceSlider && (
        <div className="price-slider">
          <input type="range" name="priceMin" min="0" max="1000000" value={filters.priceMin} onChange={handleInputChange} />
          <input type="range" name="priceMax" min="0" max="1000000" value={filters.priceMax} onChange={handleInputChange} />
          <button onClick={togglePriceSlider}>Save</button>
        </div>
      )}

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
