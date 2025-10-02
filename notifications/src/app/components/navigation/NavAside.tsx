import type { Nav } from '@/app/types/nav';

import Link from 'next/link';

interface Props {
    list: Nav[]
}

export default function NavAside({list}: Props) {
    return (
        <nav>
            {
                list.map((link) => {
                    return <Link key={link.url} href={link.url}>
                        { link.name }
                    </Link>
                })
            }
        </nav>
    )
}