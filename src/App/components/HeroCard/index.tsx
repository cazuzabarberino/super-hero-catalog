import React from "react";
import { Container, HeroImg } from "./styles";
import SuperHero from "../../../models/SuperHero";

interface Props {
  hero: SuperHero;
}

function HeroCard({ hero }: Props) {
  if (!hero) return <h1>loading</h1>;

  return (
    <Container alignment={hero.biography.alignment}>
      <p>{hero.name}</p>
      <HeroImg url={hero.image.url} />
    </Container>
  );
}

export default HeroCard;
