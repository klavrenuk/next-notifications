import { useState } from "react";

import SectionTitle from "@/components/titles/SectionTitle";
import Image from "next/image";
import Modal from "@/components/modal/Modal";

import styles from "./styles/page-notifications-head.module.css";

export default function PageNotificationsHead() {
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);

  const showModalDelete = () => {
    setIsShowModalDelete(false);
  };

  const modalAccept = () => {
    setIsShowModalDelete(false);
  };

  const modalClose = () => {
    setIsShowModalDelete(false);
  };

  return (
    <div className={styles.pageNotificationsHead}>
      <SectionTitle text="Уведомления" />

      <button onClick={showModalDelete}>
        <Image src={"/icon/icon-dots.svg"} alt="" height={20} width={20} />
      </button>

      <Modal
        isOpen={isShowModalDelete}
        title="Удалить все оповещения"
        onAccept={modalAccept}
        onClose={modalClose}
      >
        <div>remove Modal</div>
      </Modal>
    </div>
  );
}
