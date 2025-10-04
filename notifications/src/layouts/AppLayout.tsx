'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { mediaQueries } from '@/constants/app';
import { observer } from 'mobx-react-lite';
import { asideStore } from '@/store/aside';

import AppAside from '@/components/aside/AppAside';
import AppHeaderMobile from '@/components/header/AppHeaderMobile';
import AppAsideMobile from '@/components/aside/AppAsideMobile';
import AppLoader from "@/components/loader/AppLoader";

import styles from './styles/app-layout.module.scss'

export default observer(function AppLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isDesktop = useMediaQuery(mediaQueries.desktop);

  const { isOpenMobileAside } = asideStore;

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [isMobile, isDesktop]);

  if(isLoading) {
    return <AppLoader />
  }

  return (
    <div className={styles.appLayout}>
      { isDesktop && <AppAside /> }
      { isMobile && <AppHeaderMobile /> }

      <main className={styles.main}>{children}</main>

      { isMobile && isOpenMobileAside && <AppAsideMobile />}
    </div>
  );
})