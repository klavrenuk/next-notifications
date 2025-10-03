'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { mediaQueries } from '@/constants/app'

import AppAside from '@/components/aside/AppAside';

import styles from './styles/app-layout.module.css'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isDesktop = useMediaQuery(mediaQueries.desktop);

  return (
    <div className={styles.appLayout}>
      { isDesktop && <AppAside /> }

      <main>{children}</main>
    </div>
  );
}