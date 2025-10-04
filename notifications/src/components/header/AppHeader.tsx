import {ReactNode} from 'react';

import SectionTitle from "@/components/titles/SectionTitle";

import styles from "./styles/app-header.module.scss";

interface Props {
    title: string;
    children?: ReactNode;
}

export default function AppHeader({title, children}: Props) {
    return (
        <div className={styles.appHeader}>
            <SectionTitle text={title}/>

            { children }
        </div>
    );
}
