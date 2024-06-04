'use client';

import { useEffect, useState } from "react";
import { getUserId } from "../lib/actions";
import { PropertyType } from "../myproperties/page";
import Property from "../components/Property";

export default function MyFavorites() {
    const [myfavorites, setFavorites] = useState<PropertyType[]>([]);
    const [userId, setUserId] = useState<string | undefined>('');
    
    useEffect(() => {
        setData();
    }, [userId])

    async function setData() {
        const apiService = (await import('../services/apiService')).default
        const { favorites }: any = await apiService.get(`/api/properties?favorites=true`);
        setFavorites(favorites);

        const userId: string | undefined = await getUserId();
        setUserId(userId);
    }


    if (!userId) {
        return <main className = "max-w-[1500px] mx-auto pb-6" > You need to be authenticated</main>
    }

    return <main className="max-w-[1500px] mx-auto pb-6">
        <h1 className="my-6 text-2xl">My Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                myfavorites.length ? (myfavorites?.map((property) => {
                    return <Property
                        
                        property={property}
                    />
                })) : (
                    <div>You do not have any favorites</div>
                )
            }
        </div>
    </main>
}

