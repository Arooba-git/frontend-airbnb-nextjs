'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MyReservation() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        getReservations();
    }, [])

    async function getReservations() {
        const apiService = (await import('../services/apiService')).default
        const reservations: any = await apiService.get(`/api/auth/myreservations/`);

        setReservations(reservations);
    }

    return (
        <main className="max-w-[1500px] mx-auto  pb-6">
            <h1 className="my-6 mb-4 text-2xl">My reservations</h1>

            {
                reservations.length ? (
                    reservations?.map((reservation: any) => {
                        return (
                            <div className = "space-y-4" >
                                <div className="justify-content-between p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                                    <div className="col-span-1">
                                        <div className="w-full h-full relative overflow-hidden aspect-square rounded-xl">
                                            <Image
                                                fill
                                                src={reservation?.property?.image_url}
                                                className="hover:scale-110 object-cover transition h-full w-full"
                                                alt="Beach house"
                                                sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
                                        <div>
                                            <h2 className="mb-4 text-xl text-gray-500">{reservation?.property.name}</h2>
                                            <p className="mb-2"><strong>Check in date </strong>{reservation?.start_date}</p>
                                            <p className="mb-2"><strong>Check out date </strong>{reservation?.end_date}</p>
                                            <p className="mb-2"><strong>Number of nights </strong>{reservation?.number_of_nights}</p>
                                            <p className="mb-2"><strong>Total price </strong>${reservation?.total_price}</p>
                                        </div>
                                        <Link className="w-1/5 text-center mt-6 inline-block cursor-pointer py-3 px-6 bg-airbnb text-white rounded-xl" href={`/properties/${reservation.property.id}`}>Go to property</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (
                        <div>You do not have any reservations</div>
                    )
            }
        </main>
    )
}
