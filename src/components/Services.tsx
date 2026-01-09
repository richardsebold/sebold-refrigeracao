'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, ThermometerSnowflake, Refrigerator, CarTaxiFront, } from 'lucide-react'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Services() {

    const services = [
        {
            title: "INTALAÇÃO DE AR CONDICIONADO",
            descripition: "Especialista em instalaçao de Ar Condicionado.",
            urlImage: "/gemini_geladeira.png",
            icon: <ThermometerSnowflake />,
            linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
        },
        {
            title: "MANUTENÇÃO DE MAQUINA DE LAVAR",
            descripition: "Especialista em manutenção de máquina de lavar.",
            urlImage: "/gemini_ac.png",
            icon: <Refrigerator />,
            linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
        },
        {
            title: "MANUTENCAO DE AR CONDICIONADO",
            descripition: "Assistencia técnica especializada de ar condicionado.",
            urlImage: "/gemini_ac.png",
            icon: <CarTaxiFront />,
            linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
        },
        {
            title: "REPARO DE GELADEIRAS",
            descripition: "Assistencia técnica especializada de geladeiras.",
            urlImage: "/gemini_maquinaLavar.png",
            icon: <Refrigerator />,
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
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ])


    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev()
    }
    function scrollNext() {
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
                                    <article
                                        className="relative bg-cover bg-center bg-no-repeat text-white h-72"
                                        style={{ backgroundImage: `url(${item.urlImage})` }}
                                    >

                                        <div className="absolute inset-0 bg-black/50"></div>

                                        <div className="relative z-10 p-6 h-full flex flex-col space-y-4">
                                            <div className="flex-1 flex items-start justify-between">
                                                <div className="flex gap-3">

                                                    <div>
                                                        <h3 className="font-bold text-center text-xl my-1">{item.title}</h3>
                                                        <p className="text-center">{item.descripition}</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex items-center justify-center">
                                                <div className="">
                                                    <a target="_blank" href={`https://wa.me/5547997714395?text=${item.linkText}`} className="items-center flex justify-center bg-green-500 gap-2 md:hover:bg-green-500 px-6 py-2 rounded-md duration-300">
                                                        <WhatsappLogoIcon className="w-4 h-4" />
                                                        <p>Agendar</p>
                                                    </a>
                                                </div>
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
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer z-10">
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                </div>


            </div>
        </section>
    );
}