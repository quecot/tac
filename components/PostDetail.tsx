import React from 'react';
import Post from '../interfaces/Post';

interface Props {
  post: Post['node']
}

const PostDetail: React.FC<Props> = ({ post }) => (
  <div>PostDetail</div>
);

export default PostDetail;
