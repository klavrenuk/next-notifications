export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 0) return 'только что';

  const rtf = new Intl.RelativeTimeFormat('ru', { style: 'short' });

  const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ];

  for (const { unit, seconds } of units) {
    if (diffInSeconds >= seconds) {
      const count = Math.floor(diffInSeconds / seconds);
      const formatted = rtf.format(-count, unit);
      return formatted
        .replace(/г\.$/, 'год')
        .replace(/мес\.$/, 'мес')
        .replace(/дн\.$/, 'дн')
        .replace(/ч\.$/, 'ч')
        .replace(/мин\.$/, 'мин')
        .replace(/сек\.$/, 'сек');
    }
  }

  return 'только что';
}