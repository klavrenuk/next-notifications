import Image from 'next/image';

import type { User } from '@/types/notifications'

interface Props {
    user: Props
}

export default function UserAvatar({user}: Props) {
    return (
        <div>
            <Image
                    src="/img/user-alina.png"
                    alt="Пользователь"
                    width={40}
                    height={40}
                />
        </div>
    )
}