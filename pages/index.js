import FunGlobalStyle from '../styles/GlobalStyle/GlobalStyle';
import React from 'react';
import getAllPosts from '../scripts/blog/getAllPosts';
import getAllRepos from '../scripts/blog/getAllRepos';

import Head from '../scr/infra/componentes/Head/index.js';
import Header from '../scr/patterns/Header/index.js';
import Footer from '../scr/patterns/Footer/index.js';
import PostCard from '../scr/patterns/PostCard/index';

export default function Home({ reposAndPost }) {

  return (
    <div>
      <GlobalStyle />
      <Head title="Home - Blog do Rafael" />

      <Header className="headerContainer">
        <img src="https://github.com/RafaelKC.png" />
        <h1>
          Blog do Rafael
        </h1>
      </Header>

      <section className="postContainer">
        <h1>Posts</h1>
        {reposAndPost.map((post) => (

           <PostCard
              GlobalStyle={GlobalStyle}
              Style={GlobalStyle}
              articleKey={post.metadata.title}
              href={post.metadata.slug}
              linkText={post.metadata.title}
              p={`${post.metadata.excerpt} @ ${post.metadata.tags}`}
              img={post.metadata.img} />

        ))}
      </section>
      <Footer className="footer"> Todos os direitos reservados © Rafael Kauã Chicovis </Footer>
    </div>
  )
}

export async function getStaticProps() {
  const post  = getAllPosts();
  const repos = await getAllRepos();

  const reposAndPost = [].concat(post, repos);

  return {
    props: {
      post,
      reposAndPost,
    },
    revalidate:  10,
  }
}

const GlobalStyle = FunGlobalStyle();
