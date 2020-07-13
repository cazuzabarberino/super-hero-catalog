import SuperHero from "../../models/SuperHero";

export interface HeroListState {
  heroesPerPage: number;
  currentPage: number;
  heroes: SuperHero[];
}

export enum HeroListActionType {
  FETCH_PAGE = "FETCH_PAGE",
  SET_HEROES = "SET_HEROES",
  CHANGE_PAGE = "CHANGE_PAGE",
  CHANGE_HEROES_PER_PAGE = "CHANGE_HEROES_PER_PAGE",
}

export type HeroListAction =
  | {
      type: HeroListActionType.FETCH_PAGE;
    }
  | {
      type: HeroListActionType.SET_HEROES;
      payload: {
        heroes: SuperHero[];
      };
    }
  | {
      type: HeroListActionType.CHANGE_PAGE;
      payload: {
        page: number;
      };
    }
  | {
      type: HeroListActionType.CHANGE_HEROES_PER_PAGE;
      payload: {
        heroesPerPage: number;
      };
    };
