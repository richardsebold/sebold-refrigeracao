import Image from "next/image";

export default function WhatsAppButton() {
    return (
            <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-18 h-18 bg-[#25D366] rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                <a target="_blank" href="https://wa.me/554799348969?text=Olá, vim pelo site e gostaria de saber mais informações.">
                    <Image src="../../whatsapp.svg" alt="WhatsApp" width={40} height={40} className=""></Image>
                </a>
            </div>
    );
}