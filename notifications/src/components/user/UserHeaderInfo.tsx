import Image from 'next/image';

import styles from './styles/user-header-info.module.css'

export default function UserHeaderInfo() {
    const points = '560,000,690'

    return (
        <div className={styles.userHeaderInfo}>
            <Image
                src="/img/user-alina.png"
                alt="Алина"
                width={40}
                height={40}
                className={styles.photo}
            />
            <div className={styles.userAdvantages}>
                <span className={styles.points}>{points}</span>
                <Image 
                    width={16}
                    height={16}
                    alt=""
                    src="/img/achive.svg"
                />
            </div>
        </div>
    )
}