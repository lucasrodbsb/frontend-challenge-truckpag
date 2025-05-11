import { useQuery } from '@tanstack/react-query';
import { getFilms } from '../services/api';
import type { Film } from '../types/types';

export const useFilmsQuery = () => {
  return useQuery<Film[], Error>({
    queryKey: ['films'],
    queryFn: getFilms,
    staleTime: 1000 * 60 * 60, // 1 hora
    retry: 3,
  });
};

export default useFilmsQuery; 