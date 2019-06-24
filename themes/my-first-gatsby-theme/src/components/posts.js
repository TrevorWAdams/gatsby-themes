import React from 'react'
import usePosts from '../hooks/use-posts';
import PostPreview from './post-preview'

const Posts = () => {
  const posts = usePosts();
  return (
    <section>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </section>
  )
}

export default Posts
