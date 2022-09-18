import Link from 'next/link';
import React from 'react';
import Category from '../interfaces/Category';

interface Props {
  category: Category
}

const Tag: React.FC<Props> = ({ category }) => (
  <div className="inline-block px-4 py-2 font-medium text-white bg-pink-600 rounded-lg cursor-pointer whitespace-nowrap">
    <Link href={`/category/${category.slug}`}>
      {category.name}
    </Link>
  </div>
);

export default Tag;
