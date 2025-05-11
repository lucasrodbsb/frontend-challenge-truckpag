import styled from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 1.5rem;
  padding: 3rem;
  background-color: rgba(229, 9, 20, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(229, 9, 20, 0.2);
  box-shadow: var(--card-shadow);
  margin: 2rem auto;
  max-width: 800px;
`;

export const ErrorIcon = styled(FiAlertCircle)`
  color: var(--primary-color);
  font-size: 4rem;
  filter: drop-shadow(0 2px 5px rgba(229, 9, 20, 0.3));
`;

export const ErrorMessage = styled.p`
  color: var(--text-color);
  font-size: 1.3rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
  
  strong {
    color: var(--primary-color);
  }
`; 