import React from "react";
import { useFilmsQuery } from "../../hooks/useFilmsQuery";
import { FilmsProvider, useFilms } from "../../contexts/FilmsContext";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import FilmList from "../../components/FilmList";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Container, MainWrapper, ResultCount } from "./styles";

const Home: React.FC = () => {
  const { data: films, isLoading, error } = useFilmsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error || !films) {
    return (
      <Error message="Erro ao carregar filmes. Por favor, tente novamente mais tarde." />
    );
  }

  return (
    <FilmsProvider initialFilms={films}>
      <Header />
      <MainWrapper>
        <Container>
          <h2>Filmes</h2>
          <Filters />
          <ResultsCounter />
          <FilmList />
        </Container>
      </MainWrapper>
    </FilmsProvider>
  );
};

const ResultsCounter: React.FC = () => {
  const { filteredFilms, pagination } = useFilms();

  if (filteredFilms.length === 0) {
    return null;
  }

  const start = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
  const end = Math.min(
    pagination.currentPage * pagination.itemsPerPage,
    filteredFilms.length
  );

  return (
    <ResultCount>
      Mostrando{" "}
      <strong>
        {start}-{end}
      </strong>{" "}
      de <strong>{filteredFilms.length}</strong> filmes
    </ResultCount>
  );
};

export default Home;
