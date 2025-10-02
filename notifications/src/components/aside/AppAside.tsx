import { appNavigation } from '@/constants/aside-nav'

import NavAside from '@/components/navigation/NavAside'
import UserHeaderInfo from '@/components/user/UserHeaderInfo'

import styles from './styles/aside.module.css'

export default function AppAside() {
    return (
        <aside className={styles.aside}>
            <div>
                <UserHeaderInfo />
            </div>

            <NavAside list={appNavigation} />
        </aside>
    )
}