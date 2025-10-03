"use client";

import { useEffect, useState } from "react";

import NavPage from "@/components/navigation/NavPage";
import Empty from "@/components/empty/Empty";
import PageSection from "@/components/page-section/PageSection";
import NotificationCard from "@/components/notification/NotificationCard";
import AppLoader from "@/components/loader/AppLoader";
import PageNotificationsHead from "@/components/page-notifications/PageNotificationsHead";

import type { Nav } from "@/types/nav";

import styles from "@/styles/notification.module.css";

interface NotificationItem {
  type: string;
  text: string;
  created: string;
  user?: { name: string; avatar: string };
}

export default function Notifications() {
  const navList: Nav[] = [
    { url: "all", name: "Все" },
    { url: "general", name: "Общее" },
    { url: "actions", name: "Действия" },
  ];

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState(navList[0].url);

  

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
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleUpdateView = (view: string) => {
    setActiveView(view);
    fetchNotifications()
  };

  return (
    <PageSection header={<PageNotificationsHead />}>
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
    </PageSection>
  );
}
