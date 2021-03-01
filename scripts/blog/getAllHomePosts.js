import getAllPosts from './getAllPosts.js';
import getAllRepos from './getAllRepos.js'

export default async function getAllHomePosts() {
    const post  = getAllPosts();
    const repos = await getAllRepos();  
    const reposAndPost = [].concat(post, repos)

    return reposAndPost;
}