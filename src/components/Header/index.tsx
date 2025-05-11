import React from 'react';
import { Container, Title, SubTitle, Logo } from './styles';
import { useFilms } from '../../contexts/FilmsContext';
import logoGhibli from '../../assets/images/logo-studio-ghibli.png';

const Header: React.FC = () => {
  const { films } = useFilms();

  return (
    <Container>
      <Logo 
        src={logoGhibli} 
        alt="Studio Ghibli Logo" 
        title="Studio Ghibli" 
      />
      <Title>Coleção Studio Ghibli</Title>
      <SubTitle>
        Explore o mundo mágico dos filmes do Studio Ghibli.
        {films.length > 0 && ` Encontre informações sobre ${films.length} filmes.`}
      </SubTitle>
    </Container>
  );
};

export default Header; 