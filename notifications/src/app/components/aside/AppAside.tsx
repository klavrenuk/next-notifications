import { appNavigation } from '@/app/constants/aside-nav'

import NavAside from '@/app/components/navigation/NavAside'
import UserHeaderInfo from '@/app/components/user/UserHeaderInfo'

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