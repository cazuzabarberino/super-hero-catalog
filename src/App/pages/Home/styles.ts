import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroListContainer = styled.div`
  max-width: 1200px;
  padding: 8px;
  display: grid;
  place-content: center;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 8px;
`;

export const HeroListMenu = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 16px;
  
    
  > div {
    position: relative;
  }
`;
