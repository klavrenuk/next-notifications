import PageSection from "@/components/page-section/PageSection";
import AppHeader from '@/components/header/AppHeader'

export default function NotFoundPage() {
    return (
        <PageSection header={<AppHeader title={"Стараница не найдена"} />}>
            <div></div>
        </PageSection>
    )
}