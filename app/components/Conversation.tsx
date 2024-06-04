'use client';

import { useRouter } from "next/navigation";

export default function Conversation({ loggedInUserId, conversation }:any) {
    const otherUser = conversation.users.find((user: any) => user.id != loggedInUserId);
    const router = useRouter();

    return otherUser && (
        <div className="cursor-pointer px-6 py-4 rounded-xl border border-gray-300">
            <p className="mb-6 text-xl">{otherUser?.name}</p>
            <p className="text-airbnb-dark"
                onClick={() => router.push(`/inbox/${conversation?.id}?otherUserId=${otherUser.id}`)}>Go to conversation</p>
        </div>
    )
}
