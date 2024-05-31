'use client';
import React, { useEffect } from 'react';
import { Modal, ModalContent, useDisclosure, } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function DynamicModal({content, closeModal}) {
    const router = useRouter();
    const {  onClose } = useDisclosure();

    useEffect(() => {
        if (closeModal) {
            onClose();
        }

    }, [closeModal])

    return (
        <Modal isOpen={true} placement="top-center" onClose={() => {
            router.push("/")
        }}>
            <ModalContent >
                {content}
            </ModalContent>
        </Modal>
  );
}
















// interface ModalProps {
//     label: string,
//     content: React.ReactElement
//     isOpen: boolean
// }

// function Modal({ label, content, isOpen }: ModalProps) {
//     const [showModal, setShowModal] = useState(isOpen);
//     return (
//         isOpen && (
//         <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
//             <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
//                 <div className={`translate duration-600 h-full ${showModal ? 'opacity-100 translate-y-full' : 'translate-y-0 opacity-10'}`}>
//                     <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
//                         <header className="h-[60px]items-center p-4 rounded-t relative border-b flex">
//                             <div className="flex justify-center flex-grow">
//                                 <h2 className="text-lg font-bold">title passed from layout</h2>
//                             </div>
//                             <div className="flex items-center">
//                                 <div className="icon">
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
//                                     </svg>
//                                 </div>
//                             </div>
//                         </header>

//                         <section className="p-6">
//                             {content}
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ));
// }

// export default Modal;

