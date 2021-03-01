import React from 'react';
import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark'; 
import remarkHTML from 'remark-html';

export default function post({ content, metadata }) {
    
    const htmlContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString()

    return (
        <div style={{
            margin: 'auto',
            maxWidth: '600px',
            fontFamily: 'sans-serif'
          }}>
            <h1>{ metadata.title }</h1>
            <p>{ metadata.author } @ { metadata.date }</p>
            <div dangerouslySetInnerHTML={{__html: htmlContent }}>    
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    
    const postId = params.postId;
    const fileComponent = fs.readFileSync(`./_posts/${postId}.md`, 'utf-8');
    const {content, data: metadata} = grayMatter(fileComponent);

    return {
        props: {
            content: content,
            metadata: metadata,
        }
    }
} 

export async function getStaticPaths() {

    const allPostFileNames = fs.readdirSync('./_posts');

    var paths = [];
    const postsFileName = allPostFileNames.map((filename) => {
        const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
        const {content, data: metadata} = grayMatter(fileContent);

        if (metadata.slug == undefined) {
            paths.push({
                params: {
                    postId: `${filename.replace('.md', '')}`
                }
            })
        } 
    })

    return {
        paths,
        fallback: false,
    };
}