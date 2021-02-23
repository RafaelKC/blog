import fs from 'fs';
import grayMatter from 'gray-matter';

export default function getAllPaths() {

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

    return paths;
}