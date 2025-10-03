import styles from './styles/app-aside-mobile.module.scss'

import {appNavigation} from "@/constants/aside-nav";

import Image from "next/image";

import NavAside from "@/components/navigation/NavAside";


export default function AppAsideMobile() {
    return (
        <div className={styles.appAsideMobile}>
            <div className={styles.control}>
                <button>
                    <Image
                        src={"/icon/icon-close.svg"}
                        alt={""}
                        height={36}
                        width={36}
                    />
                </button>
            </div>
            <NavAside list={appNavigation} />
        </div>
    )
}