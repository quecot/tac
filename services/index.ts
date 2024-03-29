import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection (first: 100) {
    edges {
      node {
      author {
        bio
        id
        name
        photo {
          url
        }
      }
      createdAt
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
      }
    }
    }
  }
  `;

  const result = await request(graphqlAPI!, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, query, { slug });

  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    posts(
    orderBy: createdAt_DESC
    first: 3
    ) {
    title
    featuredImage {
      url
    }
    createdAt
    slug
    }
  }
  `;

  const result = await request(graphqlAPI!, query);

  return result.posts;
};

export const getSimilarPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI!, query, { slug, categories });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
  query GetCategories {
  categories (first: 100) {
    name
    slug
  }
  }
  `;

  const result = await request(graphqlAPI!, query);

  return result.categories;
};

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, query, { slug });

  return result.postsConnection.edges;
};
