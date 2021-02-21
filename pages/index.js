import styled, {createGlobalStyle} from 'styled-components';
import React from 'react';
import Link from 'next/link'

import Head from '../scr/infra/componentes/Head/index.js';
import Header from '../scr/patterns/Header/index.js';
import Footer from '../scr/patterns/Footer/index.js';
import Typography from '../scr/components/fundation/Typography/index.js'
import PostCard from '../scr/patterns/PostCard/index';


export default function Home() {
  return (
    <div>
        <GlobalStyled />
        <Head title="Home - Blog RafaelKC" />
        <Header />
      <main>
          <PostCard 
            href="http://localhost:3000/" 
            rel="bookmark" 
            small="July 13, 2020 @ 1min read" 
            p="Como waste you time with me">
              The WET Codebase
            </PostCard>
      </main>

      <Footer />
    </div>
  )
}


const GlobalStyled = createGlobalStyle`
* {
    font-family: sans-serif;
}   
`;