import { notificationsStore } from '@/store/notifications';

import Image from "next/image";

import SectionTitle from "@/components/titles/SectionTitle";

import styles from "./styles/page-notifications-head.module.scss";

export default function PageNotificationsHead() {
    const showModalDelete = () => {
        notificationsStore.showModalDelete()
    }

  return (
    <div className={styles.pageNotificationsHead}>
      <SectionTitle text="Уведомления" />

      <button onClick={showModalDelete}>
        <Image src={"/icon/icon-dots.svg"} alt="" height={20} width={20} />
      </button>
    </div>
  );
}
