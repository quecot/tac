import React from 'react';

interface Props {
  author: {
    photo: {
        url: string;
    };
    name: string;
  }
}

const Author: React.FC<Props> = ({ author }) => (
  <div>Author</div>
);

export default Author;
