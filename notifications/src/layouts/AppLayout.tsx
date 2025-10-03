'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { mediaQueries } from '@/constants/app'

import AppAside from '@/components/aside/AppAside';
import AppHeaderMobile from '@/components/header/AppHeaderMobile';
import AppAsideMobile from '@/components/aside/AppAsideMobile';

import styles from './styles/app-layout.module.scss'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isDesktop = useMediaQuery(mediaQueries.desktop);

  return (
    <div className={styles.appLayout}>
      { isDesktop && <AppAside /> }
      { isMobile && <AppHeaderMobile /> }

      <main>{children}</main>

      { isMobile && <AppAsideMobile />}
    </div>
  );
}