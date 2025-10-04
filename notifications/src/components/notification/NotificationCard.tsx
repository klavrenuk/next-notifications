import {formatRelativeTime} from '@/utils/date'
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {mediaQueries} from "@/constants/app";

import Image from 'next/image';
import Link from 'next/link';

import type {Notification} from "@/types/notifications";

import UserAvatar from "@/components/user/UserAvatar";
import Subscription from "@/components/subscription/Subscription";

import styles from "./styles/notification-card.module.scss";

interface Props {
    notification: Notification;
}

export default function NotificationCard({notification}: Props) {
    const isDesktop = useMediaQuery(mediaQueries.desktop);

    return (
        <div className={styles.notification}>
            <div className={styles.blockLeft}>
                <UserAvatar user={notification.user}/>

                <div className={styles.infoBlock}>
                    <div className={styles.userInfo}>
                        <Link
                            className={styles.name}
                            href={{
                                pathname: `/notifications/${notification?.user?.name}`,
                                query: {
                                    type: notification.type,
                                    target: notification?.target_id,
                                },
                            }}
                        >
                            {notification?.user?.name}
                        </Link>
                        <p className={styles.description}>{notification.text}</p>
                    </div>
                    <div className={styles.time}>{formatRelativeTime(notification.created)}</div>
                </div>
            </div>

            <div className={styles.blockRight}>
                {notification.type === 'subscription' && isDesktop && (
                    <Subscription />
                )}

                {notification.image && (
                    <img className={styles.rightImg} src={notification.image} alt="" width={40} height={40}/>
                )}
                <button>
                    <Image src={'/icon/icon-dots.svg'} alt="" height={20} width={20}/>
                </button>
            </div>
        </div>
    );
}
