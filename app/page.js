'use client';
import { useState, useEffect } from 'react';
import { Globe, ArrowRight, Search, Bot, BookOpen, Dna, Database, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import styles from './page.module.css';
import Sponsors from '@/components/Sponsors/Sponsors';

const TABS = [
  { id: 'search', label: 'Search', icon: Search },
  { id: 'assistant', label: 'Agent', icon: Bot },
  { id: 'literature', label: 'Literature', icon: BookOpen },
  { id: 'genomes', label: 'Genomes', icon: Dna },
  { id: 'datasets', label: 'Datasets', icon: Database },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate a backend search processing time
    setTimeout(() => {
      setIsSearching(false);
      toast.success('Query submitted successfully!', {
        description: `We've begun searching for "${searchQuery}" in our bioinformatics databases.`,
      });
    }, 1500);
  };

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heroTitle}>Discover Parasite Data</h1>
        <p className={styles.heroSubtitle}>
          The comprehensive repository for{' '}
          <a href="https://www.waccbip.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <span className={styles.waccbipHighlight}>WACCBIP</span>
          </a>{' '}
          research. Search across pathogens, host genes, literature, and datasets instantly.
        </p>

        <div className={styles.searchCard}>
          <div className={styles.topSection}>
            <Globe className={styles.globeIcon} />
            <input
              type="text"
              placeholder="Search for genes, proteins, pathogens, or publications..."
              className={styles.complexInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              disabled={isSearching}
            />
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.tabsContainer}>
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${styles.tabButton} ${isActive ? styles.activeTab : ''}`}
                  >
                    <Icon className={`${styles.tabIcon} ${isActive ? styles.activeTabIcon : ''}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <button
              className={styles.submitButton}
              disabled={!searchQuery.trim() || isSearching}
              onClick={handleSearch}
              style={{
                opacity: searchQuery.trim() ? 1 : 0.5,
                cursor: searchQuery.trim() && !isSearching ? 'pointer' : 'not-allowed'
              }}
            >
              {isSearching ? (
                <Loader2 className={styles.spinningIcon} strokeWidth={2.5} width={20} height={20} />
              ) : (
                <ArrowRight strokeWidth={2.5} width={20} height={20} />
              )}
            </button>
          </div>
        </div>
      </main>
      <Sponsors />
    </>
  );
}
