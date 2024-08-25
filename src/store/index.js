import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { projectsReducer } from "./reducer";
import { watchFetchProjects } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(projectsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchProjects);

export default store;
