'use client';

import React, { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import DynamicModal from './DynamicModal';
import CustomButton from '../CustomButton';
import apiService from '../../services/apiService';
import { useRouter } from 'next/navigation';
import { getUserId, handleLogin } from '../../lib/actions';

export default function SignupModal() {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [closeModal, setCloseModal] = useState(false);
    const router = useRouter();

    async function handleSignUp() {
        const formData = {
            email,
            password1,
            password2
        }

        const response: any = await apiService.post('/api/auth/register/', JSON.stringify(formData), false, "");

        if (response.access) {
            await handleLogin(response.user.pk, response.access, response.refresh);
            setCloseModal(true);
            window.location.href = "/";
        } else {
            const errorsList: string[] = Object.values(response).map((error: any) => error);
            setErrors(errorsList);
        }
    }

    const modalContent = (<>
        <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
        <ModalBody>
            <Input
                onChange={(e) => {setEmail(e.target.value)}}
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
            />
            <Input
                onChange={(e) => { setPassword1(e.target.value) }}
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
            />
            <Input
                onChange={(e) => { setPassword2(e.target.value) }}
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                variant="bordered"
            />
            {
                errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )
                })
            }
            
        </ModalBody>
        <ModalFooter>
            <CustomButton label="Sign Up" onClick={handleSignUp}></CustomButton>
        </ModalFooter>
    </>);
    return (
        <DynamicModal content={modalContent} closeModal={closeModal} />
    )
}