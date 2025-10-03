import { useState } from 'react'

import type { Nav } from '@/types/nav'

import styles from './styles/nav-page.module.css'

interface Props {
    list: Nav[],
    active?: string,

    update: (view:string) => void
}

export default function NavPage({list, active, update}: Props) {
    const [activeItem, setActiveItem] = useState<string| null>(active || null)

    const handleSelectLink = (url:string) => {
        setActiveItem(url)
        update(url)
    }

    return (
        <nav className={styles.navPage}>
            {
                list.map((link) => {
                    return (
                        <a key={link.url} className={activeItem === link.url ? styles.navPageLinkActive : styles.navPageLink } onClick={() => handleSelectLink(link.url)}>
                            {link.name}
                        </a>
                    )
                })
            }
        </nav>
    )
}