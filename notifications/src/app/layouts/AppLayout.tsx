'use client';

import AppAside from '@/app/components/aside/AppAside';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppAside />
      <main>{children}</main>
    </div>
  );
}