import { createStore, applyMiddleware, combineReducers } from "redux";
import { HeroListState } from "./heroList/types";
import { heroListReducer } from "./heroList";
import createSagaMiddleware from "redux-saga";
import mySagas from "../sagas";

export interface RootState {
  heroList: HeroListState;
}

const reducers = combineReducers<RootState>({ heroList: heroListReducer });
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySagas);
