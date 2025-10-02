import SectionTitle from "@/app/components/titles/SectionTitle"
import NavPage from "@/app/components/navigation/NavPage"
import Empty from "@/app/components/empty/Empty"

export default function Notifications() {
    return (
        <section className="">
            <SectionTitle text="Уведомления" />
            <NavPage />
            <Empty />
        </section>
    )
}