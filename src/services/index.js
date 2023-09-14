import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_API;

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      postsConnection {
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
            id
            slug
            title
            createdAt
            excerpt
            image {
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

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts() {
      posts(orderBy: createdAt_ASC, last: 3) {
        id
        title
        image {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        id
        image {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { categories, slug });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        id
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (id) => {
  const query = gql`
    query GetPostDetails($id: ID!) {
      post(where: { id: $id }) {
        id
        title
        excerpt
        image {
          url
        }
        author {
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
          id
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { id });

  return result.post;
};
