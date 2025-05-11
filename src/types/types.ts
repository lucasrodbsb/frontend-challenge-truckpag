export interface Film {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
}

export interface UserFilmData {
  watched: boolean;
  favorite: boolean;
  note?: string;
  rating?: number;
}

export interface EnhancedFilm extends Film {
  userData: UserFilmData;
}

export interface FilterOptions {
  searchTerm: string;
  includeDescription: boolean;
  onlyWatched: boolean;
  onlyFavorites: boolean;
  onlyWithNotes: boolean;
  ratingFilter: number | null;
}

export interface SortOptions {
  field: 'title' | 'running_time' | 'rt_score' | 'rating';
  direction: 'asc' | 'desc';
}

export enum SortField {
  TITLE = 'title',
  DURATION = 'running_time',
  SCORE = 'rt_score',
  RATING = 'rating'
} 