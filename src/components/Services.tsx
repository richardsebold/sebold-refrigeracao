'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";


export function Services() {

    const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        urlImage: "/gemini_geladeira.png",
        price: "$50",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
        duration: "1h",
        urlImage: "/gemini_ac.png",
        price: "$45",
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
        urlImage: "/gemini_ac.png",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
        urlImage: "/gemini_maquinaLavar.png",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
]

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ])


    function scrollPrev () {
        if(emblaApi) emblaApi.scrollPrev()
    }
    function scrollNext () {
        if (emblaApi) emblaApi.scrollNext()
    }

    return (
        <section className="bg-white w-full">
            <div className="w-full">

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>

                        <div className="flex">
                            {services.map((item, index) => (
                                <div className="flex-[0_0_100%] min-w-0" key={index}>
                                    <article className="bg-cover bg-center bg-no-repeat text-white p-6 space-y-4 h-full flex flex-col" style={{ backgroundImage: `url(${item.urlImage})` }}>
                                        <div className="absolute inset-0 bg-black/30 z-10"></div>
                                        <div className="flex-1 flex items-start justify-between ">

                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-white text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <div>
                                            <a target="_blank" href={`https://wa.me/5547997714395?text=${item.linkText}`} className="items-center flex justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300">
                                                Entrar em contato
                                                <WhatsappLogoIcon className="w-4 h-4" />
                                            </a>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>
                    
                    <button 
                    onClick={scrollPrev}
                    className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer z-10">
                        <ChevronLeft className="w-6 h-6 text-gray-600"  />
                    </button>
                    
                    <button 
                    onClick={scrollNext}
                    className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer z-10">
                        <ChevronRight className="w-6 h-6 text-gray-600"  />
                    </button>

                </div>


            </div>
        </section>
    );
}