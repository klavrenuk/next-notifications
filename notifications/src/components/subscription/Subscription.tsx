import { useState, useMemo } from 'react'

export default function Subscription() {
    const [isSubscription, setIsSubscription] = useState<boolean>(false)

    const toggle = () => setIsSubscription((prev) => !prev)

    const text = useMemo(() => {
        return isSubscription ? 'Подписан' : 'Подписаться'
    }, [isSubscription])

    return (
        <button className="btn btn-black" type="button" onClick={() => toggle()}>
            { text }
        </button>
    )
}