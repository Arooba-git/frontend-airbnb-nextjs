import { useRouter } from "next/navigation"

export default function SearchFilters() {
    const router = useRouter();
    return (
        <div >
            <div onClick={() => router.push('/?selectedForm=search&step=location')}  className="h-[55px] flex flex-row items-center justify-between border rounded-full">
                <div className="hidden lg:block">
                    <div className="pl-1 flex flex-row items-center justify-between">
                        <div onClick={() => router.push('/?selectedForm=search&step=location')}  className="px-2 cursor-pointer w-[250px]  h-[48px] flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="px-4 text-xs font-semibold">Where</p>
                            <p className="px-4 text-sm">Wanted location</p>
                        </div>

                        <div onClick={() => router.push('/?selectedForm=search&step=checkin')}  className="cursor-pointer w-[150px]  h-[48px]  px-4 m flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Check In</p>
                            <p className="text-sm ">Add Dates</p>
                        </div>

                        <div onClick={() => router.push('/?selectedForm=search&step=checkout')}  className=" cursor-pointer w-[150px]  h-[48px]   px-4 flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Check Out</p>
                            <p className="text-sm">Add dates</p>
                        </div>

                        <div onClick={() => router.push('/?selectedForm=search&step=details')}  className="cursor-pointer w-[150px] h-[48px]  px-4 flex flex-col justify-center rounded-full hover:bg-gray-100">
                            <p className="text-xs font-semibold">Who</p>
                            <p className="text-sm">Add Guests</p>
                        </div>
                    </div>
                </div>

                <div className="py-5 px-1">
                    <div className="cursor-pointer hover:bg-airbnb-dark transition p-4 bg-airbnb rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            style={{
                                display: "block",
                                fill:"none",
                                height:"16px",
                                width:"16px",
                                stroke:"currentColor",
                                strokeWidth:"4",
                                overflow: "visible"
                            }}
                            aria-hidden="true" role="presentation" focusable="false">
                            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}