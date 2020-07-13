import React, { useEffect, useMemo } from "react";
import { Container, HeroListContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "../../../redux/heroList/actions";
import { RootState } from "../../../redux";
import HeroCard from "../../components/HeroCard";

function Home() {
  const dispatch = useDispatch();
  const { heroes } = useSelector((state: RootState) => state.heroList);

  useEffect(() => {
    dispatch(fetchPage());
  }, [dispatch]);

  const mappedHeroes = useMemo(
    () => heroes.map((hero, i) => <HeroCard key={i} hero={hero} />),
    [heroes]
  );

  return (
    <Container>
      <HeroListContainer>{mappedHeroes}</HeroListContainer>
    </Container>
  );
}

export default Home;
