import type { Nav } from '@/app/types/nav';

import Link from 'next/link';
import Image from 'next/image';

import NotificationCounter from '@/components/notification/NotificationCounter'

import styles from './styles/nav-aside.module.css';

interface Props {
  list: Nav[];
}

export default function NavAside({ list }: Props) {
  return (
    <nav className={styles.navAside}>
      {list.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          className={styles.link}
        >
            <Image src={link.icon} alt="" width={24} height={24} />
            <span>{link.name}</span>
            
            {
              link.url === '/messages' && <NotificationCounter count="4" />
            }
        </Link>
      ))}
    </nav>
  );
}