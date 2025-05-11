import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { toast } from "react-toastify";
import FilmCard from "../components/FilmCard";
import { useFilms } from "../contexts/FilmsContext";

jest.mock("react-toastify", () => ({
  toast: {
    info: jest.fn(),
    success: jest.fn(),
  },
}));

jest.mock("../contexts/FilmsContext", () => ({
  useFilms: jest.fn(),
}));

const mockFilm = {
  id: "1",
  title: "Meu Vizinho Totoro",
  original_title: "となりのトトロ",
  original_title_romanised: "Tonari no Totoro",
  image: "https://image.com/totoro.jpg",
  movie_banner: "https://banner.com/totoro.jpg",
  description:
    "Duas irmãs encontram espíritos da floresta em uma área rural do Japão.",
  director: "Hayao Miyazaki",
  producer: "Hayao Miyazaki",
  release_date: "1988",
  running_time: "86",
  rt_score: "93",
  userData: {
    watched: false,
    favorite: false,
  },
};

const mockToggleWatched = jest.fn();
const mockToggleFavorite = jest.fn();

describe("FilmCard Component", () => {
  beforeEach(() => {
    (useFilms as jest.Mock).mockReturnValue({
      toggleWatched: mockToggleWatched,
      toggleFavorite: mockToggleFavorite,
      updateNote: jest.fn(),
      updateRating: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve marcar um filme como assistido", () => {
    render(
      <FilmCard film={mockFilm} searchTerm="" includeDescription={false} />
    );

    const watchButton = screen.getByText(/marcar assistido/i);
    fireEvent.click(watchButton);

    expect(mockToggleWatched).toHaveBeenCalledWith("1");

    expect(toast.info).toHaveBeenCalled();
  });

  test("deve marcar um filme como favorito", () => {
    render(
      <FilmCard film={mockFilm} searchTerm="" includeDescription={false} />
    );

    const favoriteButton = screen.getByText(/adicionar favorito/i);
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith("1");

    expect(toast.info).toHaveBeenCalled();
  });
});
