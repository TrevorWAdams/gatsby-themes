import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Flex, Box } from 'theme-ui'
import Image from 'gatsby-image'
import ReadLink from './read-link'

const Post = styled(Flex)`
  border-bottom: 1px solid
    ${props => (props.theme.colors.muted ? props.theme.colors.muted : 'pink')};
  margin-top: 0;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`

const PostPreview = ({ post }) => (
  <Post as="article" alignItems="center">
    <Box width="100px" height="100px" m={3}>
      <Link
        to={post.slug}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
            }
          `}
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
      </Link>
    </Box>

    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read more...</ReadLink>
    </div>
  </Post>
)

export default PostPreview
