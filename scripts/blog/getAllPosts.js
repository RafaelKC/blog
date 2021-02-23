import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark'; 
import remarkHTML from 'remark-html';

export default function getAllPosts(contentShare=false) {
    const  allPostFileNames = fs.readdirSync('./_posts')
    
    const posts = allPostFileNames.map((filename) => {
        const fileContent =  fs.readFileSync(`./_posts/${filename}`,  'utf-8');
        const { content, data: metadata } = grayMatter(fileContent);

        const htmlContent = remark()
        .use(remarkHTML)
        .processSync(content)
        .toString(); 

        var slug;

        if (metadata.slug != undefined) {
            slug = metadata.slug;
        } else {
            slug = `/posts/${filename.replace('.md', '')}`
        }

        if (contentShare) {
            return {
                metadata: {
                    ...metadata, 
                    slug: slug
                },
                content: htmlContent
            }    
        } else {
            return {
                metadata: {
                    ...metadata, 
                    slug: slug
                },
            }
        }        
    });

    return posts;
}
