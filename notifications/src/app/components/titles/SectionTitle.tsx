import styles from './styles/section-title.module.css'

interface Props {
    text: string
}

export default function SectionTitle({text}: Props) {
    return (
        <h2 className={styles.title}>
            { text }
        </h2>
    )
}