'use client';

import { useEffect, useState } from 'react';
import Conversation from '../components/Conversation';
import { getUserId } from '../lib/actions';
import apiService from '../services/apiService';

export default function Inbox() {
    const [conversations, setConversations] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        getConversations();
    }, [])

    async function getConversations() {
        const userId = await getUserId();
        setUserId(userId);

        const conversations: any = await apiService.get('/api/chat/')
        console.log("conversations", conversations);
        setConversations(conversations);
    }

    if (!userId) {
        return (<main className="max-w-[1500px] mx-auto pb-6 space-y-4">
            <p>You need to be authenticated</p>
        </main>)
    }

    return (
        <main className="max-w-[1500px] mx-auto pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>
            {
                conversations.length && conversations?.map((conversation: any) => {
                    return <Conversation
                        key={conversation.id}
                        userId={userId}
                        conversation={conversation}
                        messages={conversation.messages}
                    />
                })
            }
        </main>
    )
}
