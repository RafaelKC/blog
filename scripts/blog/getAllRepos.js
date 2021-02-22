

export default async function getAllRepos() {
    const user = 'RafaelKC'
    const gihPinnerReposResponse = await fetch(`https://gh-pinned-repos.now.sh/?username=${user}`)
    .then(res => res.json())

    const repos = gihPinnerReposResponse.map((repoName) => {
        const title = repoName.repo;
        const excerpt = repoName.description;
        const tags  = `${repoName.language}, Stars ${repoName.stars}`;
        const slug  = `https://github.com/${user}/${repoName.repo}`;

        return {
            metadata: {
                title: `Git Repo => ${title}`,
                tags: tags,
                excerpt: excerpt,
                slug: slug,
            }
        }
    })
    return repos;
}