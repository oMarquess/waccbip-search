import Header from '@/components/Header/Header';
import styles from './page.module.css';

export default function HostGenes() {
  return (
    <main className={styles.main}>
      <Header links={[]}>Host Genes</Header>
      <div className={styles.content}>
        <h2>Host Genomics and Transcriptomics</h2>
        <p>
          Investigate the host response to parasitic infections. Identify key
          genes involved in susceptibility, resistance, and immune evasion.
        </p>
        <p>
          Access detailed profiles of gene expression, genetic variants, and
          pathway annotations related to host-pathogen interactions.
        </p>
      </div>
    </main>
  );
}
