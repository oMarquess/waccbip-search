import Header from '@/components/Header/Header';
import styles from './page.module.css';

export default function Literature() {
  return (
    <main className={styles.main}>
      <Header links={[]}>Literature</Header>
      <div className={styles.content}>
        <h2>Bioinformatics Literature</h2>
        <p>
          Stay up to date with the latest scientific publications and research
          papers produced by WACCBIP researchers and collaborators.
        </p>
        <p>
          Search across a comprehensive library of texts, articles, and reviews
          specifically focused on bioinformatics, genomics, and infectious diseases.
        </p>
      </div>
    </main>
  );
}
