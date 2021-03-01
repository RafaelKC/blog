import FunGlobalStyle from '../styles/GlobalStyle/GlobalStyle';
import React from 'react';
import getAllHomePosts from '../scripts/blog/getAllHomePosts.js'

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

export const getStaticProps = async () => {
  const reposAndPost = await getAllHomePosts();

  return {
    props: {
      reposAndPost
    },
    revalidate: 10,
  }
}

const GlobalStyle = FunGlobalStyle(); 
