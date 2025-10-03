'use client';

import { useEffect, useState } from 'react';
import SectionTitle from "@/components/titles/SectionTitle";
import NavPage from "@/components/navigation/NavPage";
import Empty from "@/components/empty/Empty";
import PageSection from "@/components/page-section/PageSection";
import NotificationCard from '@/components/notification/NotificationCard';

import type { Nav } from '@/types/nav';

import styles from '@/styles/notification.module.css'

interface NotificationItem {
  type: string;
  text: string;
  created: string;
  user?: { name: string; avatar: string };
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  const navList: Nav[] = [
    { url: "all", name: "Все" },
    { url: "general", name: "Общее" },
    { url: "actions", name: "Действия" },
  ];

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications');
        if (!res.ok) throw new Error('Ошибка сети');
        const data = await res.json();
        console.log('data', data.results)

        setNotifications(data.results || []);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const title = <SectionTitle text="Уведомления" />;

  return (
    <PageSection header={title}>
      <NavPage list={navList} />

      {loading ? (
        <p>Загрузка...</p>
      ) : notifications.length > 0 ? (

        <div className={styles.list}>
          {notifications.map((notification) => (
            <NotificationCard notification={notification} key={notification.created} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </PageSection>
  );
}