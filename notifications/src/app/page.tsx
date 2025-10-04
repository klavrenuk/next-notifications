import PageSection from "@/components/page-section/PageSection";
import AppHeader from '@/components/header/AppHeader'


export default function Home() {
  return (
      <PageSection header={<AppHeader title={"Home"} />}>
          <div></div>
      </PageSection>
  );
}
