import Head from '../scr/infra/componentes/Head/index.js';
import styles from '../styles/Home.module.css'
import Header from '../scr/patterns/Header/index.js';
import Footer from '../scr/patterns/Footer/index.js';
import Typography from '../scr/components/fundation/Typography/index.js'

export default function Home() {
  return (
    <div>
        <Head title="Home - Blog RafaelKC" />
        <Header />
      <main>
        <Typography>
            Teste de conteúdo
        </Typography>
      </main>

      <Footer />
    </div>
  )
}
