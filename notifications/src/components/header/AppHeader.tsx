import {ReactNode} from 'react';

import SectionTitle from "@/components/titles/SectionTitle";

import Image from "next/image";
import Link from 'next/link';

import styles from "./styles/app-header.module.scss";

interface Props {
    title: string;
    children?: ReactNode;
    urlBack?: string;
}

export default function AppHeader({title, children, urlBack}: Props) {
    return (
        <div className={styles.appHeader}>
            <div className={styles.blockTop}>
                { urlBack &&
                    <Link
                        className={styles.blockTopLink}
                        href={urlBack}
                    >
                        <Image src={"/icon/icon-arrow.svg"} alt="" height={30} width={30} />
                    </Link>
                }
                <SectionTitle text={title}/>
            </div>

            { children }
        </div>
    );
}
