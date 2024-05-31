'use client';

import { useEffect, useState } from 'react';
import Property from '../components/Property';
import { getUserId } from '../lib/actions';

export type PropertyType = {
    id: string,
    title: string,
    price_per_night: number,
    image_url: string,
    isFavorite: boolean
}

export default function MyProperties() {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    

    useEffect(() => {
        getProperties();
    }, [])

    async function getProperties() {
        const userId = await getUserId();
        const apiService = (await import('../services/apiService')).default
        const json: any = await apiService.get(`/api/properties/?userId=${userId}`);
        setProperties(json.data);
    }

    return (
        <main className="max-w-[1500px] mx-auto pb-6">
            <h1 className="my-6 text-2xl">My properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    properties?.map((property) => {
                        return <Property
                            key={property.id}
                            property={property}
                        />
                    })
                }
            </div>
        </main> 
    )
}
