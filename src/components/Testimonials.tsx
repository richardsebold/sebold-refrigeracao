'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import mateus from '../../public/assets/clientes/mateus.jpeg'
import marcio from '../../public/assets/clientes/marcio.jpeg'
import lucas from '../../public/assets/clientes/lucas.jpeg'
import jader from '../../public/assets/clientes/jader.jpeg'
import laura from '../../public/assets/clientes/laura.jpeg'


import Image from "next/image";

const testimonials = [
    {
        content: "O serviço foi impecável! A instalação do ar condicionado foi rápida, muito limpa e a equipe explicou exatamente como usar as funções econômica do aparelho.",
        author: "Mateus Henrique dos Santos",
        role: "Cliente Residencial", 
        image: mateus,
    },
    {
        content: "Muito profissionalismo. Chamei para consertar um aparelho antigo que ninguém resolvia e eles deixaram funcionando como novo. Recomendo!",
        author: "Marcio Antonio da Silva",
        role: "Cliente Residencial",
        image: marcio,
    },
    {
        content: "A higienização fez toda a diferença. O cheiro de mofo sumiu e o ar voltou a gelar muito mais. Atendimento nota 10 da equipe.",
        author: "Camila Fernandes",
        role: "Cliente Residencial",
        image: lucas,
    },
    {
        content: "Sempre faço a manutenção preventiva com a Sebold. Eles são pontuais, honestos no diagnóstico e o preço é muito justo pela qualidade entregue.",
        author: "Jorge Almeida",
        role: "Cliente Comercial",
        image: jader,
    },
    {
        content: "Precisava de uma carga de gás com urgência nesse calor e me atenderam super rápido. Profissionais muito educados e capacitados.",
        author: "Laura",
        role: "Cliente Residencial",
        image: laura,
    },
]

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    },
    [
        Autoplay({
            delay: 3000,
        })
    ]
    )

    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev()
    }
    function scrollNext() {
        if (emblaApi) emblaApi.scrollNext()
    }

    return (
        <section className="bg-[#049B8D] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#1E1E1E]">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
                                    
                                    <article className="relative w-full min-h-100 rounded-2xl flex flex-col items-center justify-center p-8 overflow-hidden" >
                                        
                                        <Image 
                                            src={item.image} 
                                            alt={`Foto de ${item.author}`}
                                            fill
                                            className="object-cover object-center absolute inset-0 -z-10"
                                        />


                                        <div className="absolute inset-0 bg-black/60 z-0"></div>


                                        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl">
                                                
  
                                            <span className="text-5xl text-[#00BCD2] font-serif leading-none">“</span>
                                            
                                            <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed">
                                                {item.content}
                                            </p>

                                            <div className="mt-4">
                                                <p className="font-bold text-white text-lg">{item.author}</p>
                                                <p className="text-sm text-[#00BCD2] font-medium">{item.role}</p>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botões de navegação ajustados */}
                    <button
                        onClick={scrollPrev}
                        className="bg-white hover:bg-gray-100 transition-colors flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 cursor-pointer z-20">
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="bg-white hover:bg-gray-100 transition-colors flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 cursor-pointer z-20">
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>

                </div>

            </div>
        </section>
    );
}