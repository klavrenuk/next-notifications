import styles from './styles/notification-counter.module.css'

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