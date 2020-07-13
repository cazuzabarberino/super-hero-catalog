import { HeroListAction, HeroListState, HeroListActionType } from "./types";

const initialState: HeroListState = {
  currentPage: 1,
  heroesPerPage: 10,
  heroes: [],
};

export const heroListReducer = (
  state = initialState,
  action: HeroListAction
): HeroListState => {
  switch (action.type) {
    case HeroListActionType.FETCH_PAGE:
      return state;
    case HeroListActionType.SET_HEROES:
      const newHeroes = [...state.heroes];
      action.payload.heroes.forEach((hero) => (newHeroes[hero.id - 1] = hero));
      return {
        ...state,
        heroes: newHeroes,
      };
    case HeroListActionType.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };
    case HeroListActionType.CHANGE_HEROES_PER_PAGE:
      return {
        ...state,
        heroesPerPage: action.payload.heroesPerPage,
      };
    default:
      return state;
  }
};
