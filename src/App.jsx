import styles from './App.module.css';
import Button from '@mui/material/Button';


export default function App() {
  return (
    <>
      <header>
        <Button variant="contained">Hello world</Button>
      </header>
      <main className={styles.container}>
        <article className={styles.Logo}>

        </article>

        <article className={styles.PreView}>

        </article>
      </main>
      <footer>

      </footer>
    </>
  )
};