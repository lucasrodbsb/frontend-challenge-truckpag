import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    max-width: 500px;
    line-height: 1.5;
  }
`; 