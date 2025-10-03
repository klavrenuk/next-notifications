import { appNavigation } from '@/constants/aside-nav'

import Image from 'next/image';

import NavAside from '@/components/navigation/NavAside'
import UserHeaderInfo from '@/components/user/UserHeaderInfo'

import styles from './styles/aside.module.scss'

export default function AppAside() {
    return (
        <aside className={styles.aside}>
            <div className={styles.asideContainer}>
                <UserHeaderInfo />

                <button>
                    <Image src={'/icon/icon-settings.svg'} alt="" height={36} width={36} />
                </button>
            </div>

            <NavAside list={appNavigation} />
        </aside>
    )
}