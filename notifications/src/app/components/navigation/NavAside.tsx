import type { Nav } from '@/app/types/nav';
import Link from 'next/link';
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
            <span>icon</span>
            <span>{link.name}</span>
            <span>noti</span>
        </Link>
      ))}
    </nav>
  );
}