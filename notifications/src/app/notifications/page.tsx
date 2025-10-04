"use client";

import { useEffect, useState } from "react";
import { observer } from 'mobx-react-lite';
import { notificationsStore } from '@/store/notifications';

import Image from "next/image";

import NavPage from "@/components/navigation/NavPage";
import Modal from "@/components/modal/Modal";
import Empty from "@/components/empty/Empty";
import PageSection from "@/components/page-section/PageSection";
import NotificationCard from "@/components/notification/NotificationCard";
import AppLoader from "@/components/loader/AppLoader";
import AppHeader from "@/components/header/AppHeader";

import type { Nav } from "@/types/nav";
import type { Notification } from "@/types/notifications";

import styles from "@/styles/notification.module.scss";

export default observer(function Notifications() {
  const navList: Nav[] = [
    { url: "all", name: "Все" },
    { url: "general", name: "Общее" },
    { url: "actions", name: "Действия" },
  ];

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState(navList[0].url);

  const { isShowModalDelete } = notificationsStore;

  const fetchNotifications = async () => {
    try {
      setLoading(true)

      const res = await fetch("/api/notifications");
      if (!res.ok) throw new Error("Ошибка сети");
      const data = await res.json();

      setNotifications(data.results || []);

    } catch (error) {
      console.error("Ошибка загрузки:", error);

    } finally {
      setLoading(false);
    }
  };

  const handleModalAccept = () => {
    notificationsStore.closeModalDelete()
  }

  const handleModalClose = () => {
    notificationsStore.closeModalDelete()
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleUpdateView = (view: string) => {
    setActiveView(view);
    fetchNotifications()
  };

  const showModalDelete = () => {
    notificationsStore.showModalDelete()
  }

  const notificationHeader = (
      <AppHeader title={"Уведомления"}>
        <button onClick={showModalDelete}>
          <Image src={"/icon/icon-dots.svg"} alt="" height={20} width={20} />
        </button>
      </AppHeader>
  )

  return (
    <PageSection header={notificationHeader}>
      <NavPage list={navList} active={activeView} update={handleUpdateView} />

      {loading ? (
        <AppLoader />
      ) : notifications.length > 0 ? (
        <div className={styles.list}>
          {notifications.map((notification) => (
            <NotificationCard
              notification={notification}
              key={notification.created}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}

      <Modal
          isOpen={isShowModalDelete}
          title="Удалить все оповещения"
          onAccept={handleModalAccept}
          onClose={handleModalClose}
      >
        <div>
          Вы уверены?
        </div>
      </Modal>
    </PageSection>
  );
})
