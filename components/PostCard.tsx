import React from 'react';
import Post from '../interfaces/Post';

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => (
  <div>
    {post.title}
    {post.excerpt}
  </div>
);

export default PostCard;
