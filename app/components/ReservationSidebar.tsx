'use client';

import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import { useEffect, useState } from "react";
import {Range} from  'react-date-range';
import DickerPicker from "./Calender";
import DatePicker from "./Calender";
import LoginModal from "./modals/LoginModal";
import apiService from "../services/apiService";
import { getAccessToken } from "../lib/actions";
import { useRouter } from "next/navigation";
import { Property } from "../properties/[id]/page";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

export interface ReservationSidebarProps {
    userId: string | undefined,
    property: Property
}

export default function ReservationSidebar({ userId, property }: ReservationSidebarProps) {
    
    const [fee, setFee] = useState<number>(0);
    const [nights, setNights] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date());
    const [guests, setGuests] = useState<string>('1');
    const [bookedDates, setBookedDates] = useState<Date[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const daysCount = differenceInDays(dateRange.endDate, dateRange.startDate);

            if (daysCount && property.price_per_night) {
                const fee = ((daysCount * property.price_per_night) / 100) * 5;
                const totalPrice = (daysCount * property.price_per_night) + fee;
                setFee(fee);
                setTotalPrice(totalPrice);
                setNights(daysCount);
            } else {
                const fee = ((property?.price_per_night) / 100) * 5;

                setFee(fee);
                const totalPrice = property?.price_per_night + fee;
                setNights(1);
            }

            if (property) {
                getReservations();
            }
            
        }
    }, [property, userId])

    async function getReservations() {
        const reservations: any = await apiService.get(`/api/properties/${property?.id}/reservations/`);
        let dates: Date[] = [];

        reservations.forEach((reservation:any) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.start_date),
                end: new Date(reservation.start_date),
            })

            dates = [...dates, ...range]
            setBookedDates(dates);

        })
    }

    async function performBooking() {
        if (userId) {
            if (dateRange.startDate && dateRange.endDate) {
                const form = new FormData();
                form.append('guests', guests);
                form.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
                form.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
                form.append('number_of_nights', nights.toString());
                form.append('total_price', totalPrice.toString());

                const token = await getAccessToken();
                const response = await apiService.post(`/api/properties/${property.id}/book/`, form, true, token);

                if (response.success) {
                    console.log("success");
                } else {
                    console.log("failed");
                }
            }
        } else {
            
            router.push('/?selectedForm=login')
        }
    }

    function _setDateRange(selection: any) {
        const startDate = new Date(selection.startDate)
        let endDate = new Date(selection.endDate)

        if (endDate <= startDate) {
            endDate = new Date(endDate.getDate() + 1)
        }

        setDateRange({
            ...dateRange, 
            startDate: startDate,
            endDate: endDate
        })
    }

    const guestsRange = Array.from({length: property?.guests}, (_, index) => index + 1);
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property?.price_per_night} per night</h2>

            <DatePicker
                bookedDates={bookedDates}
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)} />

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>
                <select
                        className="w-full -ml-1 text-xm"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}>
                    {
                        guestsRange.map((number) => {
                            return <option key={number} value={number}>{number}</option>
                        })
                    }
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl
                hover:bg-airbnb-dark"
                onClick={performBooking}>Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>${property?.price_per_night} * {nights} nights</p>
                <p>${(property?.price_per_night * nights)}</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb fee</p>
                <p>$40</p>
            </div>

            <div className="mb-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>${(property?.price_per_night * nights) + 40}</p>
            </div>
        </aside>
    )
}
