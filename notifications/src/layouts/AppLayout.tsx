'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { mediaQueries } from '@/constants/app'
import { observer } from 'mobx-react-lite';
import { asideStore } from '@/store/aside';

import AppAside from '@/components/aside/AppAside';
import AppHeaderMobile from '@/components/header/AppHeaderMobile';
import AppAsideMobile from '@/components/aside/AppAsideMobile';

import styles from './styles/app-layout.module.scss'

export default observer(function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isDesktop = useMediaQuery(mediaQueries.desktop);

  const { isOpenMobileAside } = asideStore;

  return (
    <div className={styles.appLayout}>
      { isDesktop && <AppAside /> }
      { isMobile && <AppHeaderMobile /> }

      <main className={styles.main}>{children}</main>

      { isMobile && isOpenMobileAside && <AppAsideMobile />}
    </div>
  );
})