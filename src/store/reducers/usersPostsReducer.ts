import * as types from '../actions/types';
import { PostState } from '../../types/Posts';
import { PostsActionTypes, SetPostAction } from '../../types/actions';

const initialState: PostState = {
  posts: [],
  error: false
};

const fetchPosts = (state: PostState, action: SetPostAction) => {
  return {
    ...state,
    posts: action.posts
  }
}

const fetchPostsFailed = (state: PostState) => {
  return {
    ...state,
    error: true
  }
}

const reducer = (state = initialState, action: PostsActionTypes): PostState => {
  switch (action.type) {
    case types.SET_POSTS: return fetchPosts(state, action);
    case types.SET_POSTS_FAILED: return fetchPostsFailed(state);
    default: return state;
  }
}

export default reducer;