export type NotificationType = 'repost' | 'like' | 'comment' | 'subscription';

export interface Stories {
  total_count: number;
  seen_count: number;
}

export interface User {
  online: boolean;
  avatar: string;
  name: string;
  username: string;
  sex: 'male' | 'female';
  verified: boolean;
  stories: Stories | null;
}

export interface Notification {
  type: NotificationType;
  target_id: string;
  user: User;
  text: string;
  created: string;
  image: string;
  users?: User[];
  other_count?: number;
}

export interface NotificationsResponse {
  total: number;
  limit: number;
  offset: number;
  results: Notification[];
}