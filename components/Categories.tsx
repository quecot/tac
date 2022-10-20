import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Category from '../interfaces/Category';
import { getCategories } from '../services';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
      <h2 className="pb-4 mb-8 text-xl font-semibold border-b">
        Categories
      </h2>
      {
        categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="block pb-3 mb-3 cursor-pointer">
              {category.name}
            </span>
          </Link>
        ))
      }
    </div>
  );
};

export default Categories;
