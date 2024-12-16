import React from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from './assets/image-coming-soon-placeholder.png'; // Adjust path if necessary
import { useNavigate } from 'react-router-dom';

interface Property {
  house_id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  monthly_price?: number; // Optional for "for sale" properties
  price?: number; // Optional for "rental" properties
  rating: number; // Rating field
  property_type: 'rental' | 'for sale'; // Type of property
}

interface ListingsCardsProps {
  properties: Property[];
}

// Function to render stars based on rating
const renderStars = (rating: number) => {
  const maxStars = 5;
  const filledStars = '★'.repeat(rating); // Filled stars
  const emptyStars = '☆'.repeat(maxStars - rating); // Empty stars
  return (
    <div style={{ color: '#5cbf9b', fontSize: '1.5rem' }}> {/* Star color */}
      {filledStars + emptyStars}
    </div>
  );
};

const ListingsCards: React.FC<ListingsCardsProps> = ({ properties }) => {
  const navigate = useNavigate();

  // Handle card click
  const handleCardClick = (houseId: string) => {
    navigate(`/details/${houseId}`); // Navigates to a detailed page for the property
  };

  return (
    <div className="card-grid">
      {properties.map((property) => (
        <div
          key={property.house_id}
          className="clickable-card"
          onClick={() => handleCardClick(property.house_id)} // Card click handler
          style={{ cursor: 'pointer', textDecoration: 'none' }} // Ensure it looks clickable
        >
          <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={PlaceholderImage} alt="Property placeholder" />
            <Card.Body>
              <Card.Title>{property.name}</Card.Title>
              <Card.Text>
                <strong>Address:</strong> {property.street}, {property.city}, {property.state} {property.zipcode}
                <br />
                <strong>Price:</strong>{' '}
                {property.property_type === 'rental'
                  ? `$${property.monthly_price?.toLocaleString()}/mth`
                  : `$${property.price?.toLocaleString()}`}
                <br />
                {/* Star rating */}
                {renderStars(property.rating)}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ListingsCards;
