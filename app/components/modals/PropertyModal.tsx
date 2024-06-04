'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link, useDisclosure } from "@nextui-org/react";
import DynamicModal from './DynamicModal';
import CustomButton from '../CustomButton';
import { useRouter } from 'next/navigation';
import Categories from '../Categories'
import { SelectCountryType, getCountries } from '../../components/Countries';
import Select from 'react-select';
import Image from 'next/image';
import apiService from '@/app/services/apiService';
import { getAccessToken, getUserId } from '@/app/lib/actions';

interface PropertyModalProps {
    userId: string | undefined
}

export default function PropertyModal() {
    const [dataCategory, setDataCategory] = useState('');
    const [closeModal, setCloseModal] = useState(false);
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [guests, setGuests] = useState("");
    const [country, setCountry] = useState<SelectCountryType>();
    const [image, setDataImage] = useState<File | undefined>();
    const [errors, setErrors] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        getUserId().then((userId) => {
            if (!userId) {
                router.push('/?selectedForm=login');
            }
        });
    }, []);
    
    function setCategory(category:  string) {
        setDataCategory(category);
    }

    function setImage(event: ChangeEvent<HTMLInputElement>) {
        if (event?.target?.files?.length) {
            const image = event.target.files[0];
            setDataImage(image);
        }
    }

    async function submitProperty() {
        const form = new FormData();

        form.append('category', dataCategory);
        form.append('title', title);
        form.append('description', description );
        form.append('price_per_night', price);
        form.append('bedrooms', bedrooms);
        form.append('bathrooms', bathrooms);
        form.append('guests', guests);
        form.append('country', country?.label as string);
        form.append('country_code', country?.value as string);
        form.append('image', image as Blob);

        const bearerToken = await getAccessToken();
        const response = await apiService.post('/api/properties/create/', form, true, bearerToken);

        if (response.success) {
            router.push('/?added=true');

            setCloseModal(true);
        } else {
            const errorsList: string[]  = Object.values(response).map((error: any) =>  error)
            setErrors(errorsList);
        }
    }

    const modalContent = (<>
        <ModalHeader className="flex flex-col gap-1">Add new property</ModalHeader>
        <ModalBody>
            {
                step == 1 ? (
                    <>
                        <h2 className="text-1.6xl text-gray-700">Choose category</h2>
                        <Categories dataCategory={dataCategory} setDataCategory={setDataCategory} />
                    </>
                ) : (
                step == 2 ? (
                    <>
                        <h2 className="mb-2 text-1.6xl text-gray-700">Describe your place</h2>
                        <div className="pt-3 pb-6 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label>Title</label>
                                <input 
                                    value={title}
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-600 rounded-xl"
                                    onChange={e => setTitle(e.target.value)}/>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label>Description</label>
                                <textarea
                                    value={description}
                                    className="w-full p-4 h-[200px] border border-gray-600 rouded-xl"
                                    onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </>
                ) : (
                step == 3 ? (
                    <>
                        <h2 className="text-1.6xl text-gray-700">Details</h2>
                        <div className="pt-3 pb-6 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label>Price per night</label>
                                <input
                                    value={price}
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-600 rounded-xl"
                                    onChange={e => setPrice(e.target.value)} />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label>Bedrooms</label>
                                <input
                                    value={bedrooms}
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-600 rounded-xl"
                                    onChange={e => setBedrooms(e.target.value)} />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label>Bathrooms</label>
                                <input
                                    value={bathrooms}
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-600 rounded-xl"
                                    onChange={e => setBathrooms(e.target.value)} />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label>Guests</label>
                                <input
                                    value={guests}
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-600 rounded-xl"
                                    onChange={e => setGuests(e.target.value)} />
                            </div>
                        </div>
                    </>
                ) : (
                step == 4 ? (
                    <>
                        <h2 className="text-1.6xl text-gray-700">Location</h2>
                        <div className="pt-3 pb-6 space-y-4">
                            <Select
                                isClearable
                                placeholder='Anywhere'
                                options={getCountries()}
                                value={country}
                                onChange={(value) => setCountry(value as SelectCountryType)}
                             />
                        </div>
                    </>
                ): (
                    <>
                        <h2 className="text-1.6xl text-gray-700">Image</h2>
                        <div className="pt-3 pb-6 space-y-4">
                            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                                <input 
                                    type="file"
                                    accept="image/*"
                                    onChange={setImage}
                                />
                            </div>

                            {
                                image && (
                                    <div className="w-[200px] h-[150px] relative /">
                                        <Image  fill
                                            alt="Uploaded image"
                                            src={URL.createObjectURL(image)}
                                            className="w-full h-full object-cover rounded-xl"
                                            />
                                    </div>
                                )
                            }
                        </div>
                    </>
                ))))
            }

            {
                errors?.map((error) => {
                    return <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                        {error}
                    </div>
                })
            }

        </ModalBody>
        <ModalFooter className="flex-col">
            {(step > 1) && <CustomButton variant="dark" label="Previous" onClick={() => setStep(step - 1)} />}
            {(step < 5) &&  <CustomButton
                label='Next'
                onClick={() => setStep(step + 1)} />
            }
            { (step == 5) && <CustomButton
                label='Submit'
                onClick={submitProperty} />
            }
        </ModalFooter>
    </>);

    return (
        <DynamicModal content={modalContent} closeModal={closeModal} />
    );
}
