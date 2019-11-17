import React from 'react';
import { Post } from '../../types/Posts';

interface Props {
  posts: Post[]
}

const UsersPost: React.FC<Props> = ({ posts }) => (
  <>
    <div>Users Post</div>
    {posts.map(post => (
      <div key={post.id}>{post.title}</div>
    ))}
  </>
);

export default UsersPost;