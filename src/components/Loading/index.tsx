import React from 'react';
import { Container, Spinner } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
      <p>Carregando...</p>
    </Container>
  );
};

export default Loading; 