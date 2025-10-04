"use client";

import {useState, useEffect} from 'react';
import {useSearchParams} from 'next/navigation';

import type { Notification } from "@/types/notifications";

import Link from 'next/link';

import PageSection from "@/components/page-section/PageSection";
import AppHeader from '@/components/header/AppHeader';
import AppLoader from "@/components/loader/AppLoader";
import NotificationCard from "@/components/notification/NotificationCard";

export default function NotificationGroup() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const searchParams = useSearchParams();

    const notifType = searchParams.get('type')
    const targetId = searchParams.get('target')

    const fetchGroup = async () => {
        try {
            if (!notifType || !targetId) {
                return
            }

            setIsLoading(true)

            const url = `/api/fetch-notifications?type=${encodeURIComponent(notifType)}&target=${encodeURIComponent(targetId)}`;
            const res = await fetch(url);

            if (!res.ok) throw new Error("Ошибка");
            const data = await res.json();

            setNotifications(data.results || []);

        } catch (error) {
            console.error("Ошибка загрузки:", error);

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGroup();
    }, []);

    const notificationHeader = (
        <AppHeader title={"Уведомления"}>
            <Link
                href={'/notifications'}
            >
                arrow back
            </Link>
        </AppHeader>
    )

    return (
        <PageSection header={notificationHeader}>
            <div>
                {
                    isLoading ? <AppLoader/> :
                        <div>
                            {
                                notifications.map((notification) => (
                                    <NotificationCard
                                        notification={notification}
                                        key={`${notification.type}-${notification.created}`}
                                    />
                    ))
                }
            </div>
            }
        </div>
</PageSection>
)
    ;
}
