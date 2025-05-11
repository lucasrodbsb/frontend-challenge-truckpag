import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-70px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(5px);
  padding: 0 20px;
`;

export const ModalContainer = styled.div`
  background-color: #181818;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 550px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideIn} 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 8px 8px 0;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #e50914;
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const ModalContent = styled.div`
  padding: 1.8rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`; 