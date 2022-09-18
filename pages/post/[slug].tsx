import React from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import { getPosts, getPostDetails } from '../../services';

import {
  PostDetail, Author, CommentsForm, Comments, PostWidget, Categories,
} from '../../components';
import Post from '../../interfaces/Post';

const PostDetails: NextPage<{ post: Post['node']}> = ({ post }) => (
  <div className="container px-4 mx-auto mb-8">
    <Head>
      <title>{`TAC: ${post.title}`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="col-span-1 lg:col-span-8">
        <PostDetail post={post} />
        {/* <Author author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments slug={post.slug} /> */}
      </div>
      <div className="col-span-1 lg:col-span-4">
        <div className="relative lg:sticky top-8">
          <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
          <Categories />
        </div>
      </div>
    </div>
  </div>
);

export default PostDetails;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts: Post[] = await getPosts();

  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

  return ({
    paths,
    fallback: false,
  });
}
