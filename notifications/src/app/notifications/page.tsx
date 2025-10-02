import SectionTitle from "@/components/titles/SectionTitle"
import NavPage from "@/components/navigation/NavPage"
import Empty from "@/components/empty/Empty"

export default function Notifications() {
    return (
        <section>
            <SectionTitle text="Уведомления" />
            <NavPage />
            <Empty />
        </section>
    )
}