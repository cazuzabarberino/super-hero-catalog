import styled from "styled-components";

interface ContainerProps {
  alignment: string;
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 486px;
  background: ${({ alignment }) => (alignment === "good" ? "blue" : "red")};
  border-radius: 16px;
  overflow: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
