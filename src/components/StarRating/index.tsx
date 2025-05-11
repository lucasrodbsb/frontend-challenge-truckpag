import React, { useState } from 'react';
import { Container, Star, EmptyStar } from './styles';

interface StarRatingProps {
  initialRating?: number;
  onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onChange(value);
  };

  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Avaliação ${value} de 5 estrelas`}
          >
            {value <= (hover || rating) ? <Star /> : <EmptyStar />}
          </button>
        );
      })}
    </Container>
  );
};

export default StarRating; 