import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 2px solid #e50914;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  padding: 1.2rem;
  font-size: 1.05rem;
  line-height: 1.5;
  transition: all 0.3s ease;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: #ff0f1f;
    box-shadow: 0 0 0 1px rgba(229, 9, 20, 0.3);
  }
  
  &::placeholder {
    color: #777777;
    opacity: 0.7;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
`;

export const RatingLabel = styled.span`
  font-weight: 600;
  font-size: 1.05rem;
  color: #ffffff;
  margin-right: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SaveButton = styled.button`
  background-color: #e50914;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    background-color: #ff0f1f;
    transform: scale(1.05);
  }
`;

export const CancelButton = styled.button`
  background-color: #333333;
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
  border: none;
  
  &:hover {
    background-color: #444444;
    transform: scale(1.05);
  }
`; 