import styles from './styles/empty.module.css'

import Image from 'next/image';

export default function Empty() {
    return (
        <div className={styles.empty}>
            <Image
                src="/images/photo.jpg"
                alt="Пока нет информации"
                width={260}
                height={200}
            />
            <h6 className={styles.title}>Пока нет информации</h6>
            <p>Репосты, отметки «Нравится» и многое другое — здесь вы найдете все взаимодействия с контентом.</p>
        </div>
    )
}