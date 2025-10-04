import {ReactNode} from 'react';

import styles from './styles/page-section.module.scss'

interface Props {
    header?: ReactNode;
    children: ReactNode;
}

export default function PageSection({header, children}: Props) {
    return (
        <div className={styles.section}>
            {
                header && <header className={styles.header}>
                    {header}
                </header>
            }
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}