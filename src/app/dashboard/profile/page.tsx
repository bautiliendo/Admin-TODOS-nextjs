'use client'

import { useEffect } from "react"
import { useSession } from 'next-auth/react';

export default function Profilepage() {

    const { data: session } = useSession();

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>Page profile</h1>
            <hr />
            <div className="flex flex-col">
                <span>{session?.user?.name ?? 'No name'}</span>
                <span>{session?.user?.email ?? 'No Email'}</span>
                <span>{session?.user?.image ?? 'No Image'}</span>
                <span>{session?.user?.id ?? 'No UUID'}</span>
                <span className="capitalize">{session?.user?.roles?.join(',') ?? ['No-roles']}</span>
            </div>
        </div>
    )
}
