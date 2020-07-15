import styled from "styled-components";

interface ContainerProps {
  alignment: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 486px;
  background: ${({ alignment, theme }) =>
    alignment === "good" ? theme.color.goodHero : theme.color.badHero};
  border-radius: 16px;
  overflow: hidden;
  padding: 8px;
  color: ${({ theme }) => theme.color.fontPrimary};
  font-family: "Bangers", cursive;

  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 8px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }

  > p {
    text-align: center;
    font-size: 32px;
  }
`;

interface HeroImgProps {
  url: string;
}

export const HeroImg = styled.div<HeroImgProps>`
  width: 100%;
  flex: 1;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  border-radius: 16px;
`;
