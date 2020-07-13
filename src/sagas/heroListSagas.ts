import { all, call, put, takeLatest } from "redux-saga/effects";
import { store } from "../redux";
import { setHeroes } from "../redux/heroList/actions";
import { HeroListActionType } from "../redux/heroList/types";
import { getSuperHeroById } from "../services/superHeroApi";

export const heroListWatchers = {
  watchFetchPage: function* () {
    yield takeLatest(HeroListActionType.FETCH_PAGE, fetchPage);
  },
  watchChangePage: function* () {
    yield takeLatest(HeroListActionType.CHANGE_PAGE, fetchPage);
  },
  watchChangeHeroesPerPage: function* () {
    yield takeLatest(HeroListActionType.CHANGE_HEROES_PER_PAGE, fetchPage);
  },
};

export function* fetchPage() {
  const { heroes, currentPage, heroesPerPage } = store.getState().heroList;
  const heroesToFetch = [];
  const initialId = (currentPage - 1) * heroesPerPage + 1;
  for (let i = 0; i < heroesPerPage; i++) {
    if (i + initialId > 731) break;
    else if (!heroes[i + initialId])
      heroesToFetch.push(call(() => getSuperHeroById(i + initialId)));
  }
  const result = yield all(heroesToFetch);
  yield put(setHeroes(result));
}
