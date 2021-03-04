import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import getAllRepos from './getAllRepos.js'

const postDirectory = join(process.cwd(), '_posts');

function getMarkdownFiles() {
    return fs.readdirSync(postDirectory);
}

export function getPost(slugOrFilename, fields = []) {
    const slug = slugOrFilename.replace('.md', '')
    const directory = join(postDirectory, `${ slug }.md`)
    const fileContent = fs.readFileSync(directory, 'utf8');
    const { data, content } = matter(fileContent);
    const slugFinal = `posts/${slug}/`

    const post = {
        metadata: {}
    }

    fields.forEach(field => {
        if(field === 'content') post[field] = content;
        if(field === 'slug') post.metadata[field] = slugFinal;
        if(data[field]) post.metadata[field] = data[field];
    })

    return post
}

export async function getAllPosts(fields, wantRepos = true) {
    const slugs = getMarkdownFiles();
    const posts = slugs
    .map(slug => getPost(slug, fields))
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

    const repos = await getAllRepos();

    const allPost = [].concat(posts, repos)

    if(wantRepos) {
        return allPost;
    } else {
        return posts;
    }
}