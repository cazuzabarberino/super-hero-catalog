import React, { useEffect, useMemo } from "react";
import { Container, HeroListContainer, HeroListMenu } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "../../../redux/heroList/actions";
import { RootState } from "../../../redux";
import HeroCard from "../../components/HeroCard";
import { FiSearch } from "react-icons/fi";

function Home() {
  const dispatch = useDispatch();
  const { heroes, currentPage, heroesPerPage } = useSelector(
    (state: RootState) => state.heroList
  );

  useEffect(() => {
    dispatch(fetchPage());
  }, [dispatch]);

  const mappedHeroes = useMemo(() => {
    const result = [];
    for (let i = 0; i < heroesPerPage; i++) {
      const index = i + (currentPage - 1) * heroesPerPage;
      result.push(<HeroCard key={i} hero={heroes[index]} />);
    }

    return result;
  }, [heroes, currentPage, heroesPerPage]);

  return (
    <Container>
      <HeroListContainer>
        <HeroListMenu>
          <div>
            <input type="text" />
            <FiSearch />
          </div>
        </HeroListMenu>
        {mappedHeroes}
      </HeroListContainer>
    </Container>
  );
}

export default Home;
