import Image from "next/image";

import styles from './styles/app-loader.module.scss'

export default function AppLoader() {
    return (
        <div className={styles.appLoader}>
            <Image
                src="/icon/icon-loader.svg"
                alt=""
                width={60}
                height={60}
                className={styles.photo}
            />
        </div>
    )
}