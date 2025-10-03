import { asideStore } from '@/store/aside';

import Image from 'next/image';

import UserHeaderInfo from '@/components/user/UserHeaderInfo'

import styles from './styles/app-header-mobile.module.scss'

export default function AppHeaderMobile() {
    const handleShowAside = () => {
        asideStore.openMobileAside()
    }

    return (
        <div className={styles.appHeaderMobile}>
            <div className={styles.blockUser}>
                <button className={styles.btnIcon} onClick={handleShowAside}>
                    <Image
                        src={"/icon/icon-burger.svg"}
                        alt={""}
                        height={36}
                        width={36}
                    />
                </button>
                <UserHeaderInfo/>
            </div>

            <div className={styles.control}>
                <button className={styles.btnIcon}>
                    <Image
                        src={"/icon/icon-circle-plus.svg"}
                        alt=""
                        height={36}
                        width={36}
                    />
                </button>
                <button className={styles.btnIcon}>
                    <Image
                        src={"/icon/icon-settings.svg"}
                        alt="Настройки"
                        height={36}
                        width={36}
                    />
                </button>
            </div>
        </div>
    );
}
