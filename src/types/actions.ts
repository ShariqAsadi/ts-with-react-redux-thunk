import { Post } from "./Posts";

export const SET_POSTS = 'SET_POSTS';
export const SET_POSTS_FAILED = 'SET_POSTS_FAILED'

export interface SetPostAction {
  type: typeof SET_POSTS;
  posts: Post[];
}

export interface SetPostsFailed {
  type: typeof SET_POSTS_FAILED;
}

export type PostsActionTypes = SetPostAction | SetPostsFailed;
export type AppActions = PostsActionTypes;