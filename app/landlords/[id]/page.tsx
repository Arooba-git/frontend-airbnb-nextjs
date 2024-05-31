'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Property from "../../components/Property";
import apiService from '@/app/services/apiService';
import { getUserId } from '@/app/lib/actions';
import Properties from '@/app/properties/page';
import { useRouter } from 'next/navigation';
import { UserType } from '@/app/inbox/[id]/page';


export default function LardlordDetails({params}:any) {
    const [userId, setUserId] = useState<string | undefined>('');
    const [landlord, setLandLord] = useState<any>();
    const router = useRouter();

    useEffect(() => {
       getIds();
    }, [])

    async function getIds() {
        const landlordLocal: any = await apiService.get(`/api/auth/${params.id}/`) as UserType;

        setLandLord(landlordLocal);

        const userIdLocal = await getUserId();
        setUserId(userIdLocal);
    }

    async function startConversation(event: any): Promise<void> {
       
        if (userId) {
            const conversation: any = await apiService.get(`/api/chat/start/${landlord?.id}/`);
            router.push(`/inbox/${conversation.conversation_id}`)
        } else {
            router.push('/?selectedForm=login')
        }
    }

    return (
        <main className="max-w-[1500px] mx-auto pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" >
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        {
                            landlord?.avatar_url && <Image
                                style={{ height:'100px', objectFit: "cover" }}
                                src={landlord?.avatar_url}
                                width={100}
                                height={100}
                                alt="landlord image"
                                className="rounded-full" />
                        }

                        <h1 className="mt-6 text-2xl">{landlord?.name}</h1>
                        {
                            (userId != params.id) && (
                            <div className="mt-6 py-4 px-6 bg-airbnb text-white rounded-xl cursor-pointer hover:bg-airbnb-dark transition"
                                onClick={startConversation}

                            >
                                Contact
                            </div>)
                        }
                    </div>
                </aside>

                <div className="co-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Properties landlordId={landlord?.id} />
                    </div>
                </div>
            </div>
        </main>
    )
}
