import Image from 'next/image';
import Link from 'next/link';
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import { useEffect, useState } from 'react';
import { getUserId } from '../lib/actions';

interface NavbarProps {
    userId: string | undefined
}

export default function NavBar()  {
    const [userId, setUserId] = useState<string | undefined>('');
    getUserId().then((id) => {
        setUserId(id);
    })

    
    return <nav className="w-full fixed top-0 left-0 border-b bg-white z-10">
        <div className="mx-auto">
            <div className="flex justify-between items-center px-5 py-3" style={{padding: "1rem 3rem 1rem 3rem"}}>
                <Link href="/">
                    <Image src="/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.webp" alt="logo" width={60} height={28} />
                </Link>
                <div className="flex space-x-6">

                    <SearchFilters />
                </div>

                <div className="flex items-center space-x-6">
                    <Link href="/?selectedForm=property"  className="py-2 px-3  text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer text-gray-500">
                        Djangobnb you home
                    </Link>
                    <UserNav userId={userId}  />
                </div>
            </div>
        </div>
    </nav>
}

