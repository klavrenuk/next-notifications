import { appNavigation } from '@/app/constants/aside-nav'

import NavAside from '../navigation/NavAside'

import styles from './styles/aside.module.css'

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