import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 1.5rem;
  
  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    font-weight: 300;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(229, 9, 20, 0.2);
  border-radius: 50%;
  border-left-color: var(--primary-color);
  animation: ${spin} 1s linear infinite;
`; 