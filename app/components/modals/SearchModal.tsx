'use client';

import React, { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import DynamicModal from './DynamicModal';
import CustomButton from '../CustomButton';
import { getCountries, SelectCountryType } from '../Countries';
import Select from 'react-select';
import { useRouter, useSearchParams } from 'next/navigation';
import DatePicker from '../Calender';
import { Range } from 'react-date-range';
import { ParsedUrlQueryInput } from 'querystring';


export type SearchQueryType = {
    country: string | undefined,
    checkin: Date | undefined,
    checkout: Date | undefined,
    guests: Number,
    bathrooms: Number,
    bedrooms: Number,
    category: string
}

export default function SearchModal() {
    const initialDateRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }

    function _setDateRange(selection: Range) {
        setDateRange(selection)

        if (step === 'checkin') {
            router.push("/?selectedForm=search&step=checkout")
        } else if (step === 'checkout') {
            router.push("/?selectedForm=search&step=details")
        }
    }

    const [country, setCountry] = useState<SelectCountryType>();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange); 
    const [numGuests, setNumGuests] = useState<string>("1");
    const [numBedrooms, setNumBedrooms] = useState<string>("0");
    const [numBathrooms, setNumBathrooms] = useState<string>("0");
    const [closeModal, setCloseModal] = useState(false);
    const [searchData, setSearchData] = useState<ParsedUrlQueryInput>();

    const router = useRouter();
    let params = useSearchParams();
    const step = params.get('step');

    function closeAndSearch() {
        // setCloseModal(true);
        const searchData = {
            country: country?.label,
            checkin: dateRange.startDate,
            checkout: dateRange.endDate,
            guests: parseInt(numGuests),
            bathrooms: parseInt(numBathrooms),
            bedrooms: parseInt(numBedrooms),
            category: ''
        } as SearchQueryType

        router.push(`/properties?searchData=${encodeURIComponent(JSON.stringify(searchData))}`);
    }
 
    const contentLocation = <>
        <h1>Where do you want to go?</h1>
        <div className="pt-3 pb-6 space-y-4">
            <Select
                isClearable
                placeholder='Anywhere'
                options={getCountries()}
                value={country}
                onChange={(value) => setCountry(value as SelectCountryType)}
            />
        </div>
    </>;
        
    const contentCheckIn = <>
        <h1>When do you want to check in?</h1>
            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)} />
    </>;

    const contentCheckOut = <>
        <h1>When do you want to check out?</h1>
        <DatePicker
            value={dateRange}
            onChange={(value) => _setDateRange(value.selection)} />
    </>;

    const contentDetails = <>
        <Input
            type="Number"
            min="1"
            autoFocus
            label="Number of guests"
            placeholder="1"
            variant="bordered"
            onChange={e => { setNumGuests(e.target.value) }}
        />

        <Input
            type="Number"
            autoFocus
            label="Number of bedrooms"
            placeholder="0"
            variant="bordered"
            onChange={e => { setNumBedrooms(e.target.value) }}
        />

        <Input
            type="Number"
            autoFocus
            label="Number of bathrooms"
            placeholder="0"
            variant="bordered"
            onChange={e => { setNumBathrooms(e.target.value) }}
        />
    </>;

    const modalContent = (<>
        <ModalHeader className="flex flex-col gap-1">Search</ModalHeader>
        <ModalBody>
        {
                (step === 'location') ? contentLocation : (
                    (step === 'checkin') ? contentCheckIn : (
                        (step === 'checkout') ? contentCheckOut : (
                            contentDetails
                        )
                    )
                )
        }
        </ModalBody>
        <ModalFooter>
            <div className="w-full max-w-md">
                <div className="flex space-x-2">
            {
                (step && step != "location") &&
                <CustomButton label="Previous"
                    onClick={() => (
                        (step === 'checkin') ? router.push("/?selectedForm=search&step=location") : (
                            (step === 'checkout') ? router.push("/?selectedForm=search&step=checkin") : (
                                router.push("/?selectedForm=search&step=checkout")
                            )
                        )
                    )} variant={undefined} />
            }
            <CustomButton label={
                (step === 'location') ? "Check in date" : (
                    (step === 'checkin') ? "Check out date" : (
                        (step === 'checkout') ? "Details" : (
                            "Close and Search"
                        )
                    )
                )
            }
            onClick={() => 
                (step === 'location') ? router.push("/?selectedForm=search&step=checkin") : (
                    (step === 'checkin') ? router.push("/?selectedForm=search&step=checkout") : (
                        (step === 'checkout') ? router.push("/?selectedForm=search&step=details") : (
                            closeAndSearch()
                        )
                    )
                )
            } variant={undefined} />
            </div>
            </div>
        </ModalFooter>
    </>);

    return (
        <DynamicModal content={modalContent} closeModal={closeModal} />
    )
}



