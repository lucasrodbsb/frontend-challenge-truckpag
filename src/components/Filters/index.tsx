import React from 'react';
import { useFilms } from '../../contexts/FilmsContext';
import { SortField } from '../../types/types';
import {
  Container,
  SearchContainer,
  CheckboxContainer,
  FiltersContainer,
  SortContainer,
  FilterSection,
  StarsContainer,
  StarIcon,
  EmptyStarIcon,
} from './styles';

const Filters: React.FC = () => {
  const { 
    filterOptions, 
    setFilterOptions, 
    sortOptions, 
    setSortOptions 
  } = useFilms();

  const handleRatingFilter = (rating: number | null) => {
    setFilterOptions({ ratingFilter: rating });
  };

  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => handleRatingFilter(i === filterOptions.ratingFilter ? null : i)}
          aria-label={`Filtrar por ${i} estrelas`}
        >
          {filterOptions.ratingFilter === i ? <StarIcon /> : <EmptyStarIcon />}
        </button>
      );
    }
    
    return stars;
  };

  return (
    <Container>
      <SearchContainer>
        <input
          type="text"
          placeholder="Filtrar filmes por título..."
          value={filterOptions.searchTerm}
          onChange={(e) => setFilterOptions({ searchTerm: e.target.value })}
        />
        <CheckboxContainer>
          <label>
            <input
              type="checkbox"
              checked={filterOptions.includeDescription}
              onChange={(e) => setFilterOptions({ includeDescription: e.target.checked })}
            />
            Incluir sinopse na busca
          </label>
        </CheckboxContainer>
      </SearchContainer>

      <FiltersContainer>
        <FilterSection>
          <h3>Filtros:</h3>
          <CheckboxContainer>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.onlyWatched}
                onChange={(e) => setFilterOptions({ onlyWatched: e.target.checked })}
              />
              Assistidos
            </label>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.onlyFavorites}
                onChange={(e) => setFilterOptions({ onlyFavorites: e.target.checked })}
              />
              Favoritos
            </label>
          </CheckboxContainer>
          <CheckboxContainer>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.onlyWithNotes}
                onChange={(e) => setFilterOptions({ onlyWithNotes: e.target.checked })}
              />
              Com Anotações
            </label>
          </CheckboxContainer>
          
          <h4>Avaliação:</h4>
          <StarsContainer>
            {renderStars()}
            {filterOptions.ratingFilter && (
              <button 
                type="button" 
                onClick={() => handleRatingFilter(null)}
                className="clear-filter"
              >
                Limpar
              </button>
            )}
          </StarsContainer>
        </FilterSection>

        <FilterSection>
          <h3>Ordenar por:</h3>
          <SortContainer>
            <select
              value={sortOptions.field}
              onChange={(e) => setSortOptions({ 
                ...sortOptions, 
                field: e.target.value as SortField 
              })}
            >
              <option value={SortField.TITLE}>Título</option>
              <option value={SortField.DURATION}>Duração</option>
              <option value={SortField.SCORE}>Nota de Avaliação</option>
              <option value={SortField.RATING}>Avaliação Pessoal</option>
            </select>
            
            <select
              value={sortOptions.direction}
              onChange={(e) => setSortOptions({ 
                ...sortOptions, 
                direction: e.target.value as 'asc' | 'desc' 
              })}
            >
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </SortContainer>
        </FilterSection>
      </FiltersContainer>
    </Container>
  );
};

export default Filters; 