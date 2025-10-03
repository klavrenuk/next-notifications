import styles from './styles/notification-counter.module.scss'

interface Props {
    count: number | string
}

export default function NotificationCounter({count}: Props) {
    return (
        <div className={styles.notificationCounter}>
            {count}
        </div>
    )
}