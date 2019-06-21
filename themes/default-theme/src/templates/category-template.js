import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export const query = graphql`
 query CategoryPageQuery($category: String!) {
    allMdx(
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            author
            categories
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

const CategoryTemplate = ({ data: { allMdx: category } }) => (
  <Layout>
    <h1>{category.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
  </Layout>
);

export default CategoryTemplate;
