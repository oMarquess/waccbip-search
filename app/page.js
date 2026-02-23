'use client';
import { useState } from 'react';
import { Globe, ArrowRight, ScanLine, Search, Bot, Map, Bug } from 'lucide-react';
import styles from './page.module.css';
import Sponsors from '@/components/Sponsors/Sponsors';

const TABS = [
  { id: 'scrape', label: 'Scrape', icon: ScanLine },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'agent', label: 'Agent', icon: Bot },
  { id: 'map', label: 'Map', icon: Map },
  { id: 'crawl', label: 'Crawl', icon: Bug },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('crawl');

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heroTitle}>Explore Bioinformatics & Parasite Data</h1>
        <p className={styles.heroSubtitle}>
          The comprehensive repository for{' '}
          <span className={styles.waccbipHighlight}>WACCBIP</span> research.
          Search across pathogens, host genes, literature, and datasets instantly.
        </p>

        <div className={styles.searchCard}>
          <div className={styles.topSection}>
            <Globe className={styles.globeIcon} />
            <input
              type="text"
              placeholder="Search for genes, proteins, pathogens, or publications..."
              className={styles.complexInput}
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
            <button className={styles.submitButton}>
              <ArrowRight strokeWidth={2.5} width={20} height={20} />
            </button>
          </div>
        </div>
      </main>
      <Sponsors />
    </>
  );
}
