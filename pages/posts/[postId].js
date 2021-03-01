import React, { cloneElement } from 'react';
import toHTML from '../../scripts/markdonw/toHtml.js';
import {getAllPosts, getPost} from '../../scripts/blog/getAllPosts'
import getAllPaths from '../../scripts/blog/getAllPaths.js'


export default function post({ post }) {
    
    return (
        <div style={{
            margin: 'auto',
            maxWidth: '600px',
            fontFamily: 'sans-serif'
          }}>
            <h1>{ post.metadata.title }</h1>
            <p>{ post.metadata.author } @ { post.metadata.date }</p>
            <div dangerouslySetInnerHTML={{__html: post.content }}>    
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    
    const post = getPost(params.slug, [
        'title',
        'date',
        'author',
        'slug',
        'content',
    ]);

    post.content = await toHTML(post.content);

    console.log(post);

    return {
        props: { post }
    }
} 

export async function getStaticPaths() {
    const paths = await getAllPaths();

    console.log(paths);

    return {
        paths: {...paths},
        fallback: false,
    };
}