'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';
import Button from '../Button/Button';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Pathogens', path: '/pathogens' },
  { title: 'Host Genes', path: '/host-genes' },
  { title: 'Literature', path: '/literature' },
  { title: 'Datasets', path: '/datasets' },
  { title: 'cmd', path: '/cmd' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image
            src='/ws.svg'
            width={40}
            height={21}
            alt='WACCBIP Search logo'
          />
          <Image
            src='/waccbip-search-banner.svg'
            width={108}
            height={108}
            alt='Banner that says WACCBIP SEARCH drawn on a circular path around the logo'
            className={styles.starterKitBanner}
          />
        </div>
      </Link>

      <button
        className={styles.hamburgerButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`${styles.navigation} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        {pages.map(({ title, path }) => (
          <Link href={path} key={path} tabIndex={-1} onClick={() => setMobileMenuOpen(false)}>
            <motion.button
              className={styles.navigationItem}
              initial={false}
              animate={{
                color: pathname === path
                  ? 'var(--grey-00)'
                  : title === 'cmd' ? '#b79c05' : 'var(--grey-90)',
              }}
            >
              {pathname === path && (
                <motion.div
                  className={styles.indicator}
                  layoutId='indicator'
                  style={{ borderRadius: 32, backgroundColor: title === 'cmd' ? '#b79c05' : 'var(--primary)' }}
                />
              )}
              {title}
            </motion.button>
          </Link>
        ))}
      </nav>
      <Link
        href='#'
        target='_blank'
        className={styles.dashboard}
      >
        <Button>Group III</Button>
      </Link>
    </div>
  );
}
