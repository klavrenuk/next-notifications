import type { Nav } from '@/types/nav'

import styles from './styles/nav-page.module.css'

interface Props {
    list: Nav[]
}

export default function NavPage({list}: Props) {
    return (
        <nav className={styles.navPage}>
            {
                list.map((item) => {
                    return (
                        <a key={item.url} className={styles.navPageItem}>{ item.name }</a>
                    )
                })
            }
        </nav>
    )
}