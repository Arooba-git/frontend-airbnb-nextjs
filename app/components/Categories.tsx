'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SearchQueryType } from './modals/SearchModal';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Categories({dataCategory, setDataCategory}:any) {
    const [category, setCategory] = useState('');
    const router = useRouter();
    let params = useSearchParams();
    const searchData = params.get('searchData') as string;
    const searchQuery: SearchQueryType = JSON.parse(searchData);

    function _setCategory(_category:string) {
        setCategory(_category);

        if (setDataCategory) {
            setDataCategory(_category);
        } else {
            const queryWithSelectedCategory: SearchQueryType = { ...searchQuery, category: _category };
            router.push(`/properties?searchData=${encodeURIComponent(JSON.stringify(queryWithSelectedCategory))}`);
        }
        
    }


    return (
        <div className="p-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div onClick={() => _setCategory('')} className={`pb4 flex flex-col items-center space-y-2 border-b-2 ${(!searchQuery?.category && !category) ? `border-gray-800` : `border-white`} opacity-60 hover:border-grey-200 hover:opacity-100`}>
                <Image src="/beach.jpeg" alt="Category - Beach" width="20" height="20" />
                <span className="text-xs">All</span>
            </div>
            
            <div onClick={() => _setCategory('beach')} className={`pb4 flex flex-col items-center space-y-2 border-b-2 ${(searchQuery?.category == 'beach' || category == 'beach') ? `border-gray-800` : `border-white` } opacity-60 hover:border-grey-200 hover:opacity-100`}>
                <Image src="/beach.jpeg" alt="Category - Beach" width="20" height="20" />
                <span className="text-xs">Beaches</span>
            </div>
            <div onClick={() => _setCategory('villa')} className={`pb4 flex flex-col items-center space-y-2 border-b-2 ${(searchQuery?.category == 'villa' || category == 'villa') ? `border-gray-800` : `border-white` } opacity-60 hover:border-grey-200 hover:opacity-100`}>
                <Image src="/beach.jpeg" alt="Category - Beach" width="20" height="20" />
                <span className="text-xs">Villas</span>
            </div>
            <div onClick={() => _setCategory('cabin')} className={`pb4 flex flex-col items-center space-y-2 border-b-2 ${(searchQuery?.category == 'cabin' || category == 'cabin') ? `border-gray-800` : `border-white` } opacity-60 hover:border-grey-200 hover:opacity-100`}>
                <Image src="/beach.jpeg" alt="Category - Beach" width="20" height="20" />
                <span className="text-xs">Cabins</span>
            </div>
            <div onClick={() => _setCategory('tinyhouse')} className={`pb4 flex flex-col items-center space-y-2 border-b-2 ${(searchQuery?.category == 'tinyhouse' || category == 'tinyhouse') ? `border-gray-800` : `border-white` } opacity-60 hover:border-grey-200 hover:opacity-100`}>
                <Image src="/beach.jpeg" alt="Category - Beach" width="20" height="20" />
                <span className="text-xs">Tiny houses</span>
            </div>
        </div>
    )
}
