import type { Nav } from '@/app/types/nav';

export const appNavigation: Nav[] = [
  {
    url: '/news',
    name: 'Лента',
    icon: 'news',
  },
  {
    url: '/messages',
    name: 'Сообщения',
    icon: 'messages',
  },
  {
    url: '/notifications',
    name: 'Уведомления',
    icon: 'notifications',
  },
  {
    url: '/followers',
    name: 'Подписчики',
    icon: 'followers',
  },
  {
    url: '/shop',
    name: 'Магазин',
    icon: 'shop',
  },
  {
    url: '/balance',
    name: 'Мой баланс',
    icon: 'balance',
  },
  {
    url: '/marketing',
    name: 'Маркетинг',
    icon: 'marketing',
  },
  {
    url: '/schedule',
    name: 'График работ',
    icon: 'schedule',
  },
  {
    url: '/profile',
    name: 'Профиль',
    icon: 'profile',
  },
]