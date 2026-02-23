import Header from '@/components/Header/Header';
import styles from './page.module.css';

export default function Pathogens() {
  return (
    <main className={styles.main}>
      <Header links={[]}>Pathogens</Header>
      <div className={styles.content}>
        <h2>Explore Pathogenic Organisms</h2>
        <p>
          Search and access comprehensive genomic and proteomic data for various
          parasites and pathogenic organisms studied at WACCBIP. Our database
          includes high-quality assemblies, annotations, and variant calls.
        </p>
        <p>
          Use the search bar on the home page to find specific pathogen strains,
          or browse the comprehensive biological datasets available.
        </p>
      </div>
    </main>
  );
}
