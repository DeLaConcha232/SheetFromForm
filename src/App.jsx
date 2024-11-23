import styles from './App.module.css';
import Forms from './components/Forms'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <picture className={styles.Logo}>
          <img src="/vite.svg" alt="Logotipo" className={styles.image}/>
        </picture>

        <Forms />

        <article className={styles.PreView}>

        </article>
      </main>
      <Footer />
    </>
  )
};