import { HeroListAction, HeroListActionType } from "./types";
import SuperHero from "../../models/SuperHero";

export const fetchPage = (): HeroListAction => ({
  type: HeroListActionType.FETCH_PAGE,
});

export const setHeroes = (heroes: SuperHero[]): HeroListAction => ({
  type: HeroListActionType.SET_HEROES,
  payload: {
    heroes,
  },
});

export const changePage = (page: number): HeroListAction => ({
  type: HeroListActionType.CHANGE_PAGE,
  payload: {
    page,
  },
});

export const changeHeroesPerPage = (heroesPerPage: number): HeroListAction => ({
  type: HeroListActionType.CHANGE_HEROES_PER_PAGE,
  payload: {
    heroesPerPage,
  },
});
