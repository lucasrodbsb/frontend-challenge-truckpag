import styled from 'styled-components';
import { FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export const Container = styled.div`
  background-color: var(--card-background);
  border-radius: 8px;
  padding: 1.8rem;
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
  
  input[type="text"] {
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border: 1px solid #444;
    border-radius: var(--border-radius);
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--text-color);
    transition: var(--transition);
    
    &:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.2);
    }

    &::placeholder {
      color: var(--text-secondary);
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
  
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.95rem;
    color: var(--text-secondary);
    transition: var(--transition);

    &:hover {
      color: var(--text-color);
    }
  }
  
  input[type="checkbox"] {
    width: auto;
    margin-right: 0.8rem;
    cursor: pointer;
    accent-color: var(--primary-color);
    height: 16px;
    width: 16px;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FilterSection = styled.div`
  flex: 1;
  min-width: 200px;
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--text-color);
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
    padding-bottom: 8px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 40px;
      background-color: var(--primary-color);
    }
  }
  
  h4 {
    margin: 1.2rem 0 0.7rem;
    font-size: 1rem;
    color: var(--text-color);
    font-weight: 500;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  
  select {
    flex: 1;
    padding: 0.6rem 0.8rem;
    border: 1px solid #444;
    border-radius: var(--border-radius);
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--text-color);
    cursor: pointer;
    
    &:focus {
      border-color: var(--primary-color);
      outline: none;
    }
    
    option {
      background-color: var(--card-background);
    }
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  
  button {
    background: transparent;
    border: none;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    
    &:hover {
      background: transparent;
      transform: scale(1.1);
    }
    
    &.clear-filter {
      background: var(--danger-color);
      color: white;
      font-size: 0.8rem;
      padding: 0.3rem 0.6rem;
      margin-left: 0.7rem;
      border-radius: 3px;
      
      &:hover {
        background: #b81d24;
        transform: scale(1.05);
      }
    }
  }
`;

export const StarIcon = styled(FaStar)`
  color: #e50914;
  font-size: 1.5rem;
`;

export const EmptyStarIcon = styled(FiStar)`
  color: #666;
  font-size: 1.5rem;
`; 