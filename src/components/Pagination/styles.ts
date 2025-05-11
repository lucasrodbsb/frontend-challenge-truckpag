import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0 3rem;
  gap: 1.2rem;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  
  .page-buttons {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  
  .ellipsis {
    color: var(--text-secondary);
    font-weight: bold;
    margin: 0 0.3rem;
  }
  
  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

interface PageButtonProps {
  active: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  padding: 0;
  border-radius: 50%;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background-color: ${(props) =>
    props.active ? "var(--primary-color)" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? "white" : "var(--text-color)")};
  border: none;
  transition: all 0.2s ease;
  font-size: 1rem;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.active
        ? "var(--primary-color)"
        : "rgba(255, 255, 255, 0.2)"};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--text-color);
  border: none;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 0.95rem;

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
  }
`;

export const PageInfo = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`; 