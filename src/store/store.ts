import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { AppState } from './rootReducer';
import { AppActions } from '../types/actions';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
));