import type { Nav } from '@/types/nav';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import NotificationCounter from '@/components/notification/NotificationCounter'

import styles from './styles/nav-aside.module.scss';

interface Props {
  list: Nav[];
}

export default function NavAside({ list }: Props) {
  const pathname = usePathname();

  return (
    <nav className={styles.navAside}>
       {list.map((link) => {
        const isActive = pathname === link.url;

        return (
          <Link
            key={link.url}
            href={link.url}
            className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
          >
            <Image src={link.icon} alt="" width={24} height={24} />

            <div className={styles.linkInfo}>
              <span className={styles.linkName}>{link.name}</span>
              {link.url === '/messages' && <NotificationCounter count="4" />}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}