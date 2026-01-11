'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, ThermometerSnowflake, Refrigerator, CarTaxiFront, Wrench, } from 'lucide-react'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Carousel() {

    const services = [
        {
            title: "INSTALAÇÃO DE AR CONDICIONADO",
            descripition: "Especialista em instalação de Ar Condicionado split e central.",
            urlImage: "/assets/carrosel/ac1.jpg",
            icon: <ThermometerSnowflake size={40} />,
            linkText: 'Olá, gostaria de saber mais sobre instalação de ar condicionado.'
        },
        {
            title: "MANUTENÇÃO DE MÁQUINA DE LAVAR",
            descripition: "Diagnóstico preciso e reparo especializado para sua lavadora.",
            urlImage: "/assets/carrosel/gemini_maquinaLavar.png",
            icon: <Wrench size={40} />,
            linkText: 'Olá, gostaria de saber mais sobre manutenção de máquina de lavar.'
        },
        {
            title: "MANUTENÇÃO DE AR CONDICIONADO",
            descripition: "Limpeza química, higienização e carga de gás completa.",
            urlImage: "/assets/carrosel/acCleaning.jpg",
            icon: <CarTaxiFront size={40} />,
            linkText: 'Olá, gostaria de saber mais sobre manutenção de ar condicionado.'
        },
        {
            title: "REPARO DE GELADEIRAS",
            descripition: "Assistência técnica especializada em refrigeradores e freezers.",
            urlImage: "/assets/carrosel/gemini_geladeira.png",
            icon: <Refrigerator size={40} />,
            linkText: 'Olá, gostaria de saber mais sobre reparo de geladeiras.'
        },
        {
            title: "REPARO",
            descripition: "Assistência técnica especializada em refrigeradores e freezers.",
            urlImage: "/assets/carrosel/ac2.jpg",
            icon: <Refrigerator size={40} />,
            linkText: 'Olá, gostaria de saber mais sobre reparo de geladeiras.'
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
                                        className="relative bg-cover bg-center bg-no-repeat text-white h-80"
                                        style={{ backgroundImage: `url(${item.urlImage})` }}
                                    >

                                        <div className="absolute inset-0 bg-black/50"></div>

                                        <div className="relative z-10 p-6 h-full flex flex-col space-y-4">
                                            <div className="flex-1 flex items-start justify-center">
                                                <div className="flex gap-3">

                                                    <div>
                                                        <h3 className="font-bold text-center text-xl my-1">{item.title}</h3>
                                                        <p className="text-center">{item.descripition}</p>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex items-center justify-center">
                                                <div className="">
                                                    <a target="_blank" href={`https://wa.me/5547997714395?text=${item.linkText}`} className="items-center flex justify-center bg-[#25D366] gap-2 md:hover:bg-green-500 px-6 py-2 rounded-md transition-all hover:scale-105 duration-300 ">
                                                        <WhatsappLogoIcon className="w-5 h-5" />
                                                        <p className="uppercase">Agendar</p>
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