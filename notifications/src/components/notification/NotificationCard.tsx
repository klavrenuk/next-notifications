import { formatRelativeTime } from '@/utils/date'

import Image from 'next/image';

import type { Notification } from "@/types/notifications";

import UserAvatar from "@/components/user/UserAvatar";

import styles from "./styles/notification-card.module.scss";

interface Props {
  notification: Notification;
}

export default function NotificationCard({ notification }: Props) {
  return (
    <div className={styles.notification}>
      <div className={styles.blockLeft}>
        <UserAvatar user={notification.user} />

        <div className={styles.infoBlock}>
          <div className={styles.userInfo}>
            <h6 className={styles.name}>{notification.user.name}</h6>
            <p className={styles.description}>{ notification.text }</p>
          </div>
          <div className={styles.time}>{formatRelativeTime(notification.created)}</div>
        </div>
      </div>

      <div className={styles.blockRigth}>
        {notification.image && (
          <img className={styles.rightImg} src={notification.image} alt="" width={40} height={40} />
        )}
        <button>
          <Image src={'/icon/icon-dots.svg'} alt="" height={20} width={20} />
        </button>
      </div>
    </div>
  );
}
