'use client'

import ReservationSidebar from '@/app/components/ReservationSidebar';
import { getUserId } from '@/app/lib/actions';

import apiService from '@/app/services/apiService';
import Image from 'next/image';
import Link from 'next/link';
import {  useEffect, useState } from 'react';

interface Landlord {
    id: string;
    name: string;
    avatar_url: string;
}

export interface Property {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    guests: number;
    landlord: Landlord;
}

interface ApiResponse {
    data: Property;
}

export default function PropertyDetails({params}: {params: {id: string}}) {
    const [property, setProperty] = useState<any>();
    const [userId, setUserId] = useState<string|undefined>('');

    useEffect(() => {
        initData();
    }, []);

    async function initData() {
        const property: any = await apiService.get(`/api/properties/${params.id}/`);
        setProperty(property.data);

        const userId: string| undefined = await getUserId();
        setUserId(userId);
    }
    

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative"> 
                <Image
                    fill
                    src={property?.image_url}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    alt="Beach house"
                    priority={true} /> 
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property?.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {property?.guests} guests - {property?.bedrooms} bedrooms - {property?.bathrooms} bathroom
                    </span>

                    <hr />

                    <Link className="py-6 flex items-center space-x-4" href={`/landlords/${property?.landlord.id}`}>
                        {
                            property?.landlord?.avatar_url  && <Image
                                style={{ objectFit: "cover" }}
                                src={property?.landlord?.avatar_url}
                                width={75}
                                height={50}
                                className="rounded-full h-[73px]"
                                alt="The user name"
                            />
                        }

                        <p><strong>{property?.landlord?.name}</strong> is your host</p>
                    </Link>

                     <hr />
                    <p className="mt-6 text-lg">{property?.description}</p>
                </div>
                <ReservationSidebar userId={userId} property={property} />
            </div>
        </main>
    )
}
