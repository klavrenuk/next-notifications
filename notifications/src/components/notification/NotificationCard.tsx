import type { Notification } from "@/types/notifications";
import Image from "next/image";

import UserAvatar from "@/components/user/UserAvatar";

import styles from "./styles/notification-card.module.css";

interface Props {
  notification: Notification;
}

export default function NotificationCard({ notification }: Props) {
  return (
    <div className={styles.notification}>
      <div>
        <UserAvatar user={notification.user} />

        <div>
          <div>
            <h6>{notification.user.name}</h6>
            <p>опубликовал новый пост, коллекцию спайстори</p>
          </div>
          <div>{notification.created}</div>
        </div>
      </div>

      <div>
        {notification.image && (
          <img src={notification.image} alt="" width={40} height={40} />
        )}
      </div>
    </div>
  );
}
