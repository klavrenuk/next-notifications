import type { Nav } from '@/app/types/nav';

export const appNavigation: Nav[] = [
  {
    url: '/news',
    name: 'Лента',
    icon: '/icon/nav-news.svg',
  },
  {
    url: '/messages',
    name: 'Сообщения',
    icon: '/icon/nav-messages.svg',
  },
  {
    url: '/notifications',
    name: 'Уведомления',
    icon: '/icon/nav-notifications.svg',
  },
  {
    url: '/followers',
    name: 'Подписчики',
    icon: '/icon/nav-followers.svg',
  },
  {
    url: '/shop',
    name: 'Магазин',
    icon: '/icon/nav-shop.svg',
  },
  {
    url: '/balance',
    name: 'Мой баланс',
    icon: '/icon/nav-balance.svg',
  },
  {
    url: '/marketing',
    name: 'Маркетинг',
    icon: '/icon/nav-marketing.svg',
  },
  {
    url: '/schedule',
    name: 'График работ',
    icon: '/icon/nav-graph.svg',
  },
  {
    url: '/profile',
    name: 'Профиль',
    icon: '/icon/nav-profile.svg',
  },
]