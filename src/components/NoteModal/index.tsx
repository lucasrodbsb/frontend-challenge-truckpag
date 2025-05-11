import React, { useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";
import Modal from "../Modal";
import StarRating from "../StarRating";
import {
  FormContainer,
  Textarea,
  RatingContainer,
  ButtonsContainer,
  SaveButton,
  CancelButton,
  RatingLabel,
} from "./styles";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  filmTitle: string;
  initialNote: string;
  initialRating?: number;
  onSave: (note: string, rating?: number) => void;
}

const NoteModal: React.FC<NoteModalProps> = ({
  isOpen,
  onClose,
  filmTitle,
  initialNote,
  initialRating,
  onSave,
}) => {
  const [note, setNote] = useState(initialNote);
  const [rating, setRating] = useState(initialRating);

  const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSave = () => {
    onSave(note, rating);
    toast.success(`Anotação salva para ${filmTitle}`);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={`Anotações para ${filmTitle}`}
      width="600px"
    >
      <FormContainer>
        <Textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Adicione suas anotações sobre o filme..."
          rows={6}
          autoFocus
        />
        <RatingContainer>
          <RatingLabel>Sua avaliação:</RatingLabel>
          <StarRating
            initialRating={rating}
            onChange={handleRatingChange}
          />
        </RatingContainer>
        <ButtonsContainer>
          <CancelButton onClick={onClose}>
            Cancelar
          </CancelButton>
          <SaveButton onClick={handleSave}>
            Salvar
          </SaveButton>
        </ButtonsContainer>
      </FormContainer>
    </Modal>
  );
};

export default NoteModal; 