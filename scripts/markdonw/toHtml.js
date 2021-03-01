import remark from 'remark';
import html from 'remark-html';

export default async function toHTML(markdown) {
    const result = await remark()
    .use(html)
    .processSync(markdown)
    .toString();
    
    return result;
}