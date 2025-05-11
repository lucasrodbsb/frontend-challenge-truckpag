import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(20, 20, 20, 0.8) 100%
  ), url('https://wallpaperaccess.com/full/33505.jpg') center/cover no-repeat;
  
  padding: 4rem 0;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  position: relative;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  right: 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    background: linear-gradient(to top, var(--background-color), transparent);
  }

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 2.5rem 0;
  }
`;

export const Logo = styled.img`
  max-width: 250px;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  filter: brightness(0) invert(1) drop-shadow(0 5px 15px rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    max-width: 180px;
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  font-weight: 300;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  color: #f5f5f5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;
