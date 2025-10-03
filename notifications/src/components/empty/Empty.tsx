import styles from './styles/empty.module.scss'

import Image from 'next/image';

export default function Empty() {
    return (
        <div className={styles.empty}>
            <Image
                src="/img/empty-back.svg"
                alt="Пока нет информации"
                width={260}
                height={200}
            />
            <div className={styles.blockText}>
                <h6 className={styles.title}>Пока нет информации</h6>
                <p className={styles.description}>Репосты, отметки «Нравится»<br/> и многое другое — здесь вы найдете все взаимодействия с контентом.</p>
            </div>
        </div>
    )
}