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

    const html = `
    <html lang="pt"> 
    ${htmlContent.contents}
    </html>
    `

    return (`
        <html lang="pt"> 
        ${htmlContent}
        </html>
    `);
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