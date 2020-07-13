import { heroListWatchers } from "./heroListSagas";
import { all, fork } from "redux-saga/effects";

const mySagas = function* root() {
  yield all(Object.values(heroListWatchers).map(fork));
};

export default mySagas;
