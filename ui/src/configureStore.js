import { fork } from 'redux-saga/effects';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './scenes/Login/login.reducer.js';
import projectsReducer from './scenes/Projects/components/ProjectsList/projectsList.reducer';
import projectReducer from './scenes/Projects/components/Project/reducers/project.reducer';
import projectCreateReducer from './scenes/Projects/components/ProjectCreate/reducers/project-create.reducer';

import watchLoginSubmit from './scenes/Login/login.saga';
import watchFetchProjects from './scenes/Projects/components/ProjectsList/projectsList.saga';
import watchFetchProject from './scenes/Projects/components/Project/sagas/project.saga';
import watchProjectCreate from './scenes/Projects/components/ProjectCreate/sagas/project-create.saga';
import watchBidSubmit from './scenes/Projects/components/Bid/bid.saga.js';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  login: loginReducer,
  projects: projectsReducer,
  project: projectReducer,
  createProject: projectCreateReducer,
});

const rootSaga = function* startForeman() {
  yield fork(watchLoginSubmit);
  yield fork(watchFetchProjects);
  yield fork(watchFetchProject);
  yield fork(watchProjectCreate);
  yield fork(watchBidSubmit);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer,
      window.devToolsExtension ? window.devToolsExtension() : f => f,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;