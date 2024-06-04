'use client';

import { getAccessToken, getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useWebSocket from "react-use-websocket";
import { setTimeout } from "timers/promises";

export type UserType = {
    id: string,
    email: string,
    name: string,
    avatar: string,
    is_active: Boolean,
    is_superuser: Boolean,
    is_staff: Boolean,
    date_joined: Date
    last_login: Date
}

export type MessageType = {
    id: string,
    name: string,
    body: string,
    conversation: string,
    sent_to: UserType,
    created_by: UserType,
    conversation_id: string
}

export default function ConversationPage({params}:any) {
    const [loggedInUser, setLoggedInUser] = useState<UserType>();

    const [realTimeMessages, setRealTimeMessage] = useState<MessageType[]>([]);
    const [otherUser, setOtherUser] = useState<any>(null);

    const [newMessage, setNewMessage] = useState('');
    const [oldMessages, setOldMessages] = useState<MessageType[]>([]);
    const [readyStateValue, setReadyStateValue] = useState<any>('');
    const [token, setToken] = useState<any>('');
    const messageDiv = useRef(null);

    let searchParams = useSearchParams();
    const otherUserId = searchParams.get('otherUserId');

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${params?.id}/?token=${token ? token : null}`, {
        share: false,
        shouldReconnect: () => true
    })

    useEffect(() => {
        fetchUserId()
    }, [])

    useEffect(() => {


        if ((lastJsonMessage && typeof lastJsonMessage === 'object') && ('name' in lastJsonMessage) && ('body' in lastJsonMessage)) {
            const newMessage: any = {
                id: "",
                name: lastJsonMessage.name as string,
                body: lastJsonMessage.body as string,
                sent_to: otherUser as UserType,
                created_by: loggedInUser as UserType,
                conversation_id: params?.id
            }
            setRealTimeMessage((realTimeMessages) => [...realTimeMessages, newMessage]);
        }

        window.setTimeout(() => {
            scrollToBottom();
        }, 50);

        scrollToBottom();
    }, [lastJsonMessage])
    
    async function fetchUserId() {
        const loggedInUserIdLocal: string | undefined  = await getUserId();
        const loggedInUserData: UserType = await apiService.get(`/api/auth/${loggedInUserIdLocal}`) as UserType;
        setLoggedInUser(loggedInUserData);

        const otherUserData: UserType = await apiService.get(`/api/auth/${otherUserId}`) as UserType;
        setOtherUser(otherUserData);

        const { conversation, messages }: any = await apiService.get(`/api/chat/${params.id}`);
        // for old messages
        if (messages) {
            setOldMessages(messages);
        }
       
        const token = await getAccessToken();
        setToken(token);
    }

    async function sendMessage() {
        if (!loggedInUser) {
            console.error("You need to be authenticated");
        }

        if (typeof window === 'undefined') {
            console.error("Cannot send messages on the server-side");
            return;
        }

        if (!sendJsonMessage) {
            console.error("WebSocket connection is not established");
            return;
        }

        const messageData = {
            event: 'chat_message',
            data: {
                body: newMessage,
                receiver_id: otherUser?.id,
                conversation_id: params?.id,
                name: loggedInUser?.name,
            }
        };

        sendJsonMessage(messageData);
        await setNewMessage('');

        
    }

    function scrollToBottom() {
        if (messageDiv.current) {
            /* @ts-ignore */
            messageDiv.current.scrollTop = messageDiv?.current?.scrollHeight
        }
    }

    if (!loggedInUser) {
        return <main>You need to be authenticated</main>
    }

    return (
        <main ref={messageDiv} className="max-w-[1500px] mx-auto pb-6 space-y-4">
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                {
                    oldMessages?.map((message: MessageType, index) => {
                        return <div key={index}
                            className={`w-[80%] py-4 px-6 rounded-xl ${message?.created_by.id === loggedInUser?.id ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}>
                            <p className="font-bold text-gray-500">{message?.created_by.name}</p>
                            <p>{message?.body}</p>
                        </div>
                    })
                }
                {
                    realTimeMessages.map((message, index) => {

                       return <div key={index}
                           className={`w-[80%] py-4 px-6 rounded-xl ${message?.created_by?.id === loggedInUser?.id ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}>
                           <p className="font-bold text-gray-500">{message?.created_by.name}</p>
                            <p>{message?.body}</p>
                        </div>
                    })
                }
            </div>

            <div className="rounded-xl mt-4 py-4 px-6 flex border border-gray-300 space-x-4">
                <input type="text" placeholder="Type your message..."
                    className="w-full p-5 bg-gray-200 rounded-xl"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}>
                </input>

                <div
                    onClick={sendMessage} 
                    className="
                      flex items-center justify-center 
                    w-[100px] p-2 bg-airbnb hover:bg-airbnb-dark
                       text-white rounded-xl transition cursor-pointer">
                            Send
                </div>
            </div>
        </main>
    )
}
