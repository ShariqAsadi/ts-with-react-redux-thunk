import axios from 'axios';
import * as types from './types';
import { Post } from '../../types/Posts';
import { AppActions } from '../../types/actions';
import { Dispatch } from 'redux';

export const setPosts = (posts: Post[]): AppActions => ({
  type: types.SET_POSTS,
  posts
})

export const setPostsFailed = (): AppActions => ({
  type: types.SET_POSTS_FAILED
})


export const initUsersPosts = () => (dispatch: Dispatch<AppActions>) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch(setPosts(res.data))
    })
    .catch(err => {
      dispatch(setPostsFailed());
    })
}