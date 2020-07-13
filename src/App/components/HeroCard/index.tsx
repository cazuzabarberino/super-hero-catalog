import React from "react";
import { Container, HeroImg } from "./styles";
import SuperHero from "../../../models/SuperHero";

interface Props {
  hero: SuperHero;
}

function HeroCard({ hero }: Props) {
  return (
    <Container alignment={hero.biography.alignment}>
      <h3>{hero.name}</h3>
      <HeroImg url={hero.image.url} />
    </Container>
  );
}

export default HeroCard;
