import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type {
  EnhancedFilm,
  Film,
  FilterOptions,
  SortOptions,
  UserFilmData,
} from "../types/types";

const ITEMS_PER_PAGE = 10;

interface FilmsContextData {
  films: EnhancedFilm[];
  isLoading: boolean;
  error: Error | null;
  filterOptions: FilterOptions;
  sortOptions: SortOptions;
  pagination: PaginationState;
  setFilterOptions: (options: Partial<FilterOptions>) => void;
  setSortOptions: (options: SortOptions) => void;
  setPagination: (page: number) => void;
  toggleWatched: (filmId: string) => void;
  toggleFavorite: (filmId: string) => void;
  updateNote: (filmId: string, note: string) => void;
  updateRating: (filmId: string, rating: number) => void;
  filteredFilms: EnhancedFilm[];
  paginatedFilms: EnhancedFilm[];
  totalPages: number;
}

interface FilmsProviderProps {
  children: ReactNode;
  initialFilms: Film[];
}

interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

const FilmsContext = createContext<FilmsContextData>({} as FilmsContextData);

export const FilmsProvider: React.FC<FilmsProviderProps> = ({
  children,
  initialFilms,
}) => {
  const [films, setFilms] = useState<EnhancedFilm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    searchTerm: "",
    includeDescription: false,
    onlyWatched: false,
    onlyFavorites: false,
    onlyWithNotes: false,
    ratingFilter: null,
  });
  
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: "title",
    direction: "asc",
  });

  const [pagination, setPaginationState] = useState<PaginationState>({
    currentPage: 1,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const LOCAL_STORAGE_KEY = "studioGhibliUserData";

  useEffect(() => {
    const loadUserData = () => {
      try {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        
        if (savedData) {
          const userData: Record<string, UserFilmData> = JSON.parse(savedData);
          
          const enhancedFilms = initialFilms.map((film) => ({
            ...film,
            userData: userData[film.id] || {
              watched: false,
              favorite: false,
            },
          }));
          
          setFilms(enhancedFilms);
        } else {
          const enhancedFilms = initialFilms.map((film) => ({
            ...film,
            userData: {
              watched: false,
              favorite: false,
            },
          }));
          
          setFilms(enhancedFilms);
        }
        
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Erro ao carregar dados")
        );
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [initialFilms]);

  useEffect(() => {
    if (films.length > 0) {
      const userData = films.reduce((acc, film) => {
        acc[film.id] = film.userData;
        return acc;
      }, {} as Record<string, UserFilmData>);
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
    }
  }, [films]);

  useEffect(() => {
    setPaginationState((prev) => ({ ...prev, currentPage: 1 }));
  }, [filterOptions, sortOptions]);

  const toggleWatched = (filmId: string) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === filmId
          ? {
              ...film,
              userData: { ...film.userData, watched: !film.userData.watched },
            }
          : film
      )
    );
  };

  const toggleFavorite = (filmId: string) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === filmId
          ? {
              ...film,
              userData: { ...film.userData, favorite: !film.userData.favorite },
            }
          : film
      )
    );
  };

  const updateNote = (filmId: string, note: string) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === filmId
          ? { ...film, userData: { ...film.userData, note } }
          : film
      )
    );
  };

  const updateRating = (filmId: string, rating: number) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === filmId
          ? { ...film, userData: { ...film.userData, rating } }
          : film
      )
    );
  };

  const updateFilterOptions = (options: Partial<FilterOptions>) => {
    setFilterOptions((prev) => ({
      ...prev,
      ...options,
    }));
  };

  const setPage = (page: number) => {
    setPaginationState((prev) => ({ ...prev, currentPage: page }));
  };

  const filteredFilms = films
    .filter((film) => {
      const matchesSearch = filterOptions.searchTerm
        ? filterOptions.includeDescription
          ? film.title
              .toLowerCase()
              .includes(filterOptions.searchTerm.toLowerCase()) ||
            film.description
              .toLowerCase()
              .includes(filterOptions.searchTerm.toLowerCase())
          : film.title
              .toLowerCase()
              .includes(filterOptions.searchTerm.toLowerCase())
        : true;

      const matchesWatched = filterOptions.onlyWatched
        ? film.userData.watched
        : true;
      const matchesFavorites = filterOptions.onlyFavorites
        ? film.userData.favorite
        : true;
      const matchesWithNotes = filterOptions.onlyWithNotes
        ? !!film.userData.note
        : true;
      const matchesRating = filterOptions.ratingFilter
        ? film.userData.rating === filterOptions.ratingFilter
        : true;

      return (
        matchesSearch &&
        matchesWatched &&
        matchesFavorites &&
        matchesWithNotes &&
        matchesRating
      );
    })
    .sort((a, b) => {
      const field = sortOptions.field;
      const direction = sortOptions.direction === "asc" ? 1 : -1;
      
      if (field === "rating") {
        const ratingA = a.userData.rating || 0;
        const ratingB = b.userData.rating || 0;
        return (ratingA - ratingB) * direction;
      }
      
      if (field === "running_time" || field === "rt_score") {
        return (parseInt(a[field]) - parseInt(b[field])) * direction;
      }
      
      return a[field].localeCompare(b[field]) * direction;
    });

  const totalPages = Math.ceil(filteredFilms.length / pagination.itemsPerPage);

  const paginatedFilms = filteredFilms.slice(
    (pagination.currentPage - 1) * pagination.itemsPerPage,
    pagination.currentPage * pagination.itemsPerPage
  );

  const value = {
    films,
    isLoading,
    error,
    filterOptions,
    sortOptions,
    pagination,
    setFilterOptions: updateFilterOptions,
    setSortOptions,
    setPagination: setPage,
    toggleWatched,
    toggleFavorite,
    updateNote,
    updateRating,
    filteredFilms,
    paginatedFilms,
    totalPages,
  };

  return (
    <FilmsContext.Provider value={value}>{children}</FilmsContext.Provider>
  );
};

export const useFilms = () => {
  const context = useContext(FilmsContext);
  
  if (!context) {
    throw new Error("useFilms deve ser usado dentro de um FilmsProvider");
  }
  
  return context;
};

export default FilmsContext;
