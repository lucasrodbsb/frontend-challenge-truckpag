import styled, { css } from "styled-components";
import { FaHeart } from "react-icons/fa";

interface ActionButtonProps {
  watched?: boolean;
  favorite?: boolean;
  note?: boolean;
}

interface ScoreProps {
  score: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-background);
  border-radius: 6px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-height: 520px;
  }
`;

export const FilmImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: filter 0.3s ease;
  object-position: center;

  @media (min-width: 768px) {
    width: 350px;
    height: 100%;
  }

  ${Container}:hover & {
    filter: brightness(1.1);
  }
`;

export const FilmContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--card-background);
  border-top: 3px solid var(--primary-color);

  @media (min-width: 768px) {
    border-top: none;
    border-left: 3px solid var(--primary-color);
  }
`;

export const FilmHeader = styled.div`
  margin-bottom: 1rem;
`;

export const FilmTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const FilmInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
      content: "•";
      margin-left: 1rem;
      color: var(--text-secondary);
    }
  }
`;

export const FilmDescription = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex: 1;
  overflow: auto;
`;

export const FilmMeta = styled.div`
  margin-bottom: 1.5rem;

  .note {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: rgba(229, 9, 20, 0.1);
    border-radius: var(--border-radius);
    border-left: 3px solid var(--primary-color);
  }
`;

export const LabelInfo = styled.p`
  margin-bottom: 0.8rem;
  color: var(--text-secondary);

  strong {
    margin-right: 0.5rem;
    color: var(--text-color);
  }
`;

export const FilmActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.2s ease;

  svg {
    font-size: 1.2rem;
  }

  ${(props) =>
    props.watched &&
    css`
      background-color: var(--success-color);

      &:hover {
        background-color: #388e3c;
      }
    `}

  ${(props) =>
    props.favorite &&
    css`
      background-color: var(--danger-color);

      &:hover {
        background-color: #b81d24;
      }
    `}
  
  ${(props) =>
    props.note &&
    css`
      background-color: var(--info-color);

      &:hover {
        background-color: #006acc;
      }
    `}
`;

export const NoteContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--card-hover-background);
  border-radius: var(--border-radius);

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem;
  }
`;

export const NoteTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #444;
  border-radius: var(--border-radius);
  resize: vertical;
  font-family: inherit;
  padding: 0.8rem;
  font-size: 0.95rem;
  background-color: #333;
  color: var(--text-color);
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  span {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-color);
  }
`;

export const SaveButton = styled.button`
  background-color: var(--success-color);

  &:hover {
    background-color: #388e3c;
  }
`;

export const CloseButton = styled.button`
  background-color: var(--danger-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;

  &:hover {
    background-color: #b81d24;
  }
`;

export const Score = styled.span<ScoreProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if (props.score >= 90) return "#4caf50";
    if (props.score >= 70) return "#8bc34a";
    if (props.score >= 50) return "#ffc107";
    return "#f44336";
  }};
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
`;

export const HeartFilled = styled(FaHeart)`
  color: white;
`;

export const HighlightedText = styled.span`
  background-color: rgba(229, 9, 20, 0.3);
  color: white;
  padding: 0 2px;
  border-radius: 2px;
`;
