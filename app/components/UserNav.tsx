'use client';

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { resetAuthCookies } from "../lib/actions";
import { useSearchParams } from "next/navigation";

interface UserNavProps {
    userId: string | undefined
}

export default function UserNav({ userId }: UserNavProps) {
    let params = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const selectedForm = params.get('selectedForm');

    
    useEffect(() => {
        //@ts-ignore//
        if (!selectedForm || (selectedForm != 'login' && selectedForm != 'signup')) {
            setIsOpen(false);
        }
    }, [selectedForm])
    

    function submitLogout() {
        resetAuthCookies();
    }

    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center"
                onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </button>

             {
                isOpen && (
                    <div onClick={() => setIsOpen(!isOpen)}  className="w-[220px] absolute top-[45px]
                            right-0 bg-white border rounded-xl shadow-md
                            flex flex-col cursor-pointer">
                                {
                                    userId ? (
                                        <>
                                          
                                           <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href='/myproperties'>My Properties</Link>
                                           <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href='/myreservations'>My Reservations</Link>
                                           <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href='/myfavorites'>My Favorites</Link>
                                           <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href='/inbox'>Inbox</Link>
                                           <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href='/' onClick={submitLogout}>Logout</Link>
                                        </>

                                    ) : (
                                         <>
                                            <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href="/?selectedForm=login">Login</Link>
                                            <Link className="px-5 py-4 hover:bg-gray-100 text-gray-500 transition" href="/?selectedForm=signup">Sign up</Link>
                                         </>
                                         
                                    )
                                }
                    </div>
                )
             }
        </div>
    )
}
