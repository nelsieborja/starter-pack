import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'Reducers';
import customMiddlewares from 'Middlewares';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [...customMiddlewares, thunk];

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middlewares))
);

export default store;
