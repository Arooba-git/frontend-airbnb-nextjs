'use client';

import React, { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter, Button,  Checkbox, Input, Link, useDisclosure } from "@nextui-org/react";
import DynamicModal from './DynamicModal';
import CustomButton from '../CustomButton';
import apiService from '../../services/apiService';
import { getAccessToken, handleLogin } from '../../lib/actions';

export default function LoginModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [closeModal, setCloseModal] = useState(false);

    async function submitLoginCredentials() {
        const formData = {
            email, password
        }

        const bearerToken = await getAccessToken();
        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData), false, bearerToken);

       if (response.access) {
           await handleLogin(response.user.pk, response.access, response.refresh);
           window.location.href="/";
           setCloseModal(true); 
       } else {
        const errorsList: string[] = Object.values(response).map((error: any) => error);
        setErrors(errorsList);
       }
    }

    const modalContent = (<>
        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
        <ModalBody>
            <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                onChange={e => { setEmail(e.target.value)}}
            />
            <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                onChange={e => { setPassword(e.target.value) }}
            />
            {
                errors?.map((error) => {
                    return <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    {error}
                    </div>
                })
            }
           
        </ModalBody>
        <ModalFooter>
            <CustomButton label="Login" onClick={submitLoginCredentials}></CustomButton>
        </ModalFooter>
    </>);
    
    return (
        <DynamicModal content={modalContent} closeModal={closeModal} />
    );
}