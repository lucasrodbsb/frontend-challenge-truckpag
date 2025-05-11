import axios from 'axios';
import type { Film } from '../types/types';

const api = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
});

export const getFilms = async (): Promise<Film[]> => {
  const response = await api.get<Film[]>('/films');
  return response.data;
};

export const getFilmById = async (id: string): Promise<Film> => {
  const response = await api.get<Film>(`/films/${id}`);
  return response.data;
};

export default api; 