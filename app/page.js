import { Search } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heroTitle}>Explore Bioinformatics & Parasite Data</h1>
      <p className={styles.heroSubtitle}>
        The comprehensive repository for WACCBIP research. Search across pathogens,
        host genes, literature, and datasets instantly.
      </p>

      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} strokeWidth={2.5} />
        <input
          type="text"
          placeholder="Search for genes, proteins, pathogens, or publications..."
          className={styles.searchInput}
        />
      </div>
    </main>
  );
}
