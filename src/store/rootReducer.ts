import { combineReducers } from 'redux';
import usersPostsReducer from './reducers/usersPostsReducer';

const rootReducer = combineReducers({
  usersPosts: usersPostsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
