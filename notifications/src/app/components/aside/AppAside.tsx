import styles from './styles/aside.module.css'

import { appNavigation } from '@/app/constants/aside-nav'

import NavAside from '../navigation/NavAside'

export default function AppAside() {
    return (
        <aside className={styles.aside}>
            <div>
                User
            </div>

            <NavAside list={appNavigation} />
        </aside>
    )
}