'use client';

import { useRouter } from "next/navigation";



export default function Conversation({ userId, conversation }:any) {
    const otherUser = conversation.users.find((user:any) => user.id != userId);
    const router = useRouter();

    return (
        <div className="cursor-pointer px-6 py-4 rounded-xl border border-gray-300">
            <p className="mb-6 text-xl">{otherUser.name}</p>
            <p className="text-airbnb-dark"
                onClick={() => router.push(`/inbox/${conversation.id}`)}>Go to conversation</p>
        </div>
    )
}
