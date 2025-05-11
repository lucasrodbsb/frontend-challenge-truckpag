import React from 'react';
import { Container, ErrorIcon, ErrorMessage } from './styles';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Container>
      <ErrorIcon />
      <ErrorMessage>{message}</ErrorMessage>
    </Container>
  );
};

export default Error; 