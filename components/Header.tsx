import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Category from '../interfaces/Category';

const Header: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories.reverse()));
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-8 border-b border-blue-400">
        <div className="block md:float-left md:pr-10">
          <Link href="/">
            <span className="text-4xl font-bold text-white cursor-pointer">
              Blog TAC
            </span>
          </Link>
        </div>
        <div className="hidden lg:float-left lg:contents">
          {
        categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              {category.name}
            </span>
          </Link>
        ))
      }
        </div>
      </div>
    </div>
  );
};

export default Header;
