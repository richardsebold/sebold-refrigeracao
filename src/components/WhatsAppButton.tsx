'use client'

import { WhatsappLogoIcon } from "@phosphor-icons/react";

export default function WhatsAppButton() {

    const phoneNumber = '554799348969';
    const message = 'Olá, vim pelo site e gostaria de saber mais informações.';

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-18 h-18 bg-[#25D366] rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <div className="relative">
                <a target="_blank" href={`https://wa.me/${phoneNumber}?text=${message}`}>
                    <WhatsappLogoIcon color="white" size={60} weight="regular"  />
                </a>
            </div>
        </div>
    );
}