import type { User } from "@/types/notifications";

import Image from 'next/image';

import styles from "./styles/user-avatar.module.css";

interface Props {
  user: User;
}

export default function UserAvatar({ user }: Props) {
  console.log("user", user);

  const avatarSrc = user.avatar || '/img/user-default.svg';

  return (
    <div className={styles.userAvatar}>
      <img
        src={avatarSrc}
        alt=""
        className={styles.avatar}
      />
      {user.online && <div className={styles.online}>
        <span></span>
        </div>
    }
    </div>
  );
}
