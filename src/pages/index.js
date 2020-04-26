import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero  from '../components/hero'
import PostPreview from '../components/post-preview'
import usePosts from '../hooks/use-post'


export default () => {
    const posts = usePosts();
    
    
    return (
    <>
        <Hero/>
    <Layout>
    <h1>Hello Frontend Masters!</h1>
    <Link to="/about">About</Link>

    <h2>Read My Blog</h2>
        {posts.map( post => (
            <PostPreview key={post.slug} post={post}/>
        ))}

    </Layout>
    </>
)}