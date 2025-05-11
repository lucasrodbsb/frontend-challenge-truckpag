import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    
    &:hover {
      background: transparent;
      transform: scale(1.1);
    }
    
    &:focus {
      outline: none;
    }
  }
`;

export const Star = styled(FaStar)`
  color: #e50914;
  font-size: 2rem;
  filter: drop-shadow(0 0 2px rgba(229, 9, 20, 0.3));
`;

export const EmptyStar = styled(FiStar)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 2rem;
  stroke-width: 1.5;
  
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`; 