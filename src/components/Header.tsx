import { Calendar, Phone, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function Header() {
  'use client'

  return (
    <header className="flex w-full flex-col justify-center items-center bg-white" id="home">

        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-3">
            
            {/* 1. LOGO */}
            <div className="">
              <Image
              src="/assets/logo-cab.jpg"
              alt="Sebold Refrigeracao"
              className="object-contain"
              width={400}
              height={100}
            />
            </div>

            {/* 2. INFO DESKTOP */}
            <div className="hidden md:grid grid-cols-3 gap-6 flex-1 max-w-4xl">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 px-4 last:border-none" data-aos="fade-up">
                    <Calendar className="text-[#049B8D] mb-3 w-8 h-8" />
                    <h3 className="font-bold text-gray-800 text-sm lg:text-base">Segunda a Sábado</h3>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1">8:00 às 22:00<br/>Plantão aos domingos</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 px-4 last:border-none" data-aos="fade-up">
                    <ThumbsUp className="text-[#049B8D] mb-3 w-8 h-8" />
                    <h3 className="font-bold text-gray-800 text-sm lg:text-base">Garantia de Serviço</h3>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1">1 ano de garantia<br/>na instalação</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center text-center px-4" data-aos="fade-up">
                    <Phone className="text-[#049B8D] mb-3 w-8 h-8" />
                    <h3 className="font-bold text-gray-800 text-sm lg:text-base">(47) 99934-8969</h3>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1">Joinville - SC<br/>Atendimento rápido</p>
                </div>
            </div>

          </div>
        </div>
        {/* --- FIM DO BLOCO DE INFORMAÇÕES --- */}
    </header>
  );
}