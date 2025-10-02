import SectionTitle from "@/components/titles/SectionTitle";
import NavPage from "@/components/navigation/NavPage";
import Empty from "@/components/empty/Empty";
import PageSection from "@/components/page-section/PageSection";

import type { Nav } from '@/types/nav'

export default function Notifications() {
  const navList: Nav[] = [
    {
      url: "all",
      name: "Все",
    },
    {
      url: "general",
      name: "Общее",
    },
    {
      url: "actions",
      name: "Действия",
    },
  ];

  const title = <SectionTitle text="Уведомления" />

  const content = () => {
    return (
        <div>
            <NavPage list={navList} />
            <Empty />
        </div>
    )
  }

  return (
    <section>
        <PageSection header={title}>
            <NavPage list={navList} />
            <Empty />
        </PageSection>
    </section>
  );
}
