import React from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import Category from '../../interfaces/Category';
import Post from '../../interfaces/Post';

interface Props {
  posts: Post[]
  categoryName: string
}

const CategoryPost: React.FC<Props> = ({ posts, categoryName }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container px-4 mx-auto mb-8">
      <Head>
        <title>{`TAC: ${categoryName}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.length === 0 ? <div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg">No s&apos;han trobat publicacions en aquesta categoria :(</div> : <div />}
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const posts = await getCategoryPost(params.slug);
  const categories: Category[] = await getCategories();
  const categoryName = categories.filter((category) => category.slug === params.slug)[0].name;

  return {
    props: { posts, categoryName },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories: Category[] = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
