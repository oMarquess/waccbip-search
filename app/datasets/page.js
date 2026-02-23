import Header from '@/components/Header/Header';
import styles from './page.module.css';

export default function Datasets() {
  return (
    <main className={styles.main}>
      <Header links={[]}>Datasets</Header>
      <div className={styles.content}>
        <h2>Curated Datasets</h2>
        <p>
          Download massive volumes of curated genetic, phenotypic, and omics
          datasets. Browse sequences, VCFs, assemblies, and custom annotations
          from the West African Centre for Cell Biology of Infectious Pathogens.
        </p>
      </div>
    </main>
  );
}
