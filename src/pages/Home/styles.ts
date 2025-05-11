import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.8rem;
    color: var(--text-color);
    font-weight: 700;
    letter-spacing: 0.5px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 3px;
      background-color: var(--primary-color);
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem 2rem;
  }
`;

export const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
`;

export const ResultCount = styled.div`
  margin: 1.5rem 0;
  font-size: 1rem;
  color: var(--text-secondary);
  
  strong {
    color: var(--primary-color);
    font-weight: 600;
  }
`; 