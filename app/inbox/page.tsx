'use client';

import { useEffect, useState } from 'react';
import Conversation from '../components/Conversation';
import { getUserId } from '../lib/actions';

export default function Inbox() {
    const [conversations, setConversations] = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState<string | undefined>('');

    useEffect(() => {
        getConversations();
    }, [])

    async function getConversations() {
        const userIdLocal: string | undefined = await getUserId();
        setLoggedInUserId(userIdLocal);

        const apiService = (await import('../services/apiService')).default

        const conversations: any = await apiService.get('/api/chat/')
        console.log("conversations", conversations);
        setConversations(conversations);
    }

    if (!loggedInUserId) {
        return (<main className="max-w-[1500px] mx-auto pb-6 space-y-4">
            <p>You need to be authenticated</p>
        </main>)
    }

    return (
        <main className="max-w-[1500px] mx-auto pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>
            {
                conversations.length ? conversations?.map((conversation: any) => {
                    return <Conversation
                        key={conversation.id}
                        loggedInUserId={loggedInUserId}
                        conversation={conversation}
                        messages={conversation.messages}
                    />
                }) : (
                        <div> You have no conversations</div>
                )
            }
        </main>
    )
}
