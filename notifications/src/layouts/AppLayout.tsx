'use client';

import AppAside from '@/components/aside/AppAside';

import styles from './styles/app-layout.module.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.appLayout}>
      <AppAside />
      <main>{children}</main>
    </div>
  );
}