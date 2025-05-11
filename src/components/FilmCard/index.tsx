import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff, FiHeart, FiEdit2 } from "react-icons/fi";
import type { EnhancedFilm } from "../../types/types";
import { useFilms } from "../../contexts/FilmsContext";
import StarRating from "../StarRating";
import NoteModal from "../NoteModal";

import {
  Container,
  FilmImage,
  FilmContent,
  FilmHeader,
  FilmTitle,
  FilmInfo,
  FilmDescription,
  FilmMeta,
  FilmActions,
  ActionButton,
  Score,
  HeartFilled,
  LabelInfo,
  HighlightedText,
} from "./styles";

interface FilmCardProps {
  film: EnhancedFilm;
  searchTerm: string;
  includeDescription: boolean;
}

const FilmCard: React.FC<FilmCardProps> = ({
  film,
  searchTerm,
  includeDescription,
}) => {
  const { toggleWatched, toggleFavorite, updateNote, updateRating } =
    useFilms();
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const formatRunningTime = (time: string) => {
    const minutes = parseInt(time);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };

  const highlightSearchTerm = (text: string) => {
    if (!searchTerm || !includeDescription) {
      return text;
    }

    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <HighlightedText key={i}>{part}</HighlightedText>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleWatchedToggle = () => {
    toggleWatched(film.id);
    toast.info(
      film.userData.watched
        ? `${film.title} foi removido da lista de assistidos`
        : `${film.title} foi marcado como assistido`
    );
  };

  const handleFavoriteToggle = () => {
    toggleFavorite(film.id);
    toast.info(
      film.userData.favorite
        ? `${film.title} foi removido dos favoritos`
        : `${film.title} foi adicionado aos favoritos`
    );
  };

  const handleOpenNoteModal = () => {
    setIsNoteModalOpen(true);
  };

  const handleSaveNote = (note: string, rating?: number) => {
    updateNote(film.id, note);
    if (rating !== undefined) {
      updateRating(film.id, rating);
    }
  };

  const handleRatingChange = (rating: number) => {
    updateRating(film.id, rating);
    toast.success(`Avaliação atualizada para ${film.title}`);
  };

  return (
    <Container>
      <FilmImage src={film.image || film.movie_banner} alt={film.title} />

      <FilmContent>
        <FilmHeader>
          <FilmTitle>{film.title}</FilmTitle>
          <FilmInfo>
            <span>{film.release_date}</span>
            <span>{formatRunningTime(film.running_time)}</span>
            <Score score={parseInt(film.rt_score)}>{film.rt_score}%</Score>
          </FilmInfo>
        </FilmHeader>

        <FilmDescription>
          {highlightSearchTerm(film.description)}
        </FilmDescription>

        <FilmMeta>
          <LabelInfo>
            <strong>Diretor:</strong> {film.director}
          </LabelInfo>
          <LabelInfo>
            <strong>Produtor:</strong> {film.producer}
          </LabelInfo>

          {film.userData.note && (
            <LabelInfo className="note">
              <strong>Anotação:</strong> {film.userData.note}
            </LabelInfo>
          )}

          {film.userData.rating && (
            <LabelInfo>
              <strong>Sua avaliação:</strong>
              <StarRating
                initialRating={film.userData.rating}
                onChange={handleRatingChange}
              />
            </LabelInfo>
          )}
        </FilmMeta>

        <FilmActions>
          <ActionButton
            type="button"
            watched={film.userData.watched}
            onClick={handleWatchedToggle}
            aria-label={
              film.userData.watched
                ? "Desmarcar como assistido"
                : "Marcar como assistido"
            }
          >
            {film.userData.watched ? <FiEyeOff /> : <FiEye />}
            {film.userData.watched ? "Assistido" : "Marcar assistido"}
          </ActionButton>

          <ActionButton
            type="button"
            favorite={film.userData.favorite}
            onClick={handleFavoriteToggle}
            aria-label={
              film.userData.favorite
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"
            }
          >
            {film.userData.favorite ? <HeartFilled /> : <FiHeart />}
            {film.userData.favorite ? "Favorito" : "Adicionar favorito"}
          </ActionButton>

          <ActionButton
            type="button"
            note={!!film.userData.note}
            onClick={handleOpenNoteModal}
            aria-label="Adicionar anotação"
          >
            <FiEdit2 />
            {film.userData.note ? "Editar anotação" : "Adicionar anotação"}
          </ActionButton>
        </FilmActions>

        <NoteModal
          isOpen={isNoteModalOpen}
          onClose={() => setIsNoteModalOpen(false)}
          filmTitle={film.title}
          initialNote={film.userData.note || ""}
          initialRating={film.userData.rating}
          onSave={handleSaveNote}
        />
      </FilmContent>
    </Container>
  );
};

export default FilmCard;
