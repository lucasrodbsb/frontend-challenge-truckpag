import React from "react";
import { useFilms } from "../../contexts/FilmsContext";
import FilmCard from "../FilmCard";
import Pagination from "../Pagination";
import { Container, EmptyMessage } from "./styles";

const FilmList: React.FC = () => {
  const { paginatedFilms, filterOptions, totalPages, pagination, setPagination } = useFilms();

  if (paginatedFilms.length === 0) {
    return (
      <EmptyMessage>
        <h3>Nenhum filme encontrado</h3>
        <p>
          Tente ajustar os filtros para encontrar o que você está procurando.
        </p>
      </EmptyMessage>
    );
  }

  return (
    <>
      <Container>
        {paginatedFilms.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            searchTerm={filterOptions.searchTerm}
            includeDescription={filterOptions.includeDescription}
          />
        ))}
      </Container>
      
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={totalPages}
        onPageChange={setPagination}
      />
    </>
  );
};

export default FilmList;
