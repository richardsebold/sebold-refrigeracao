import Image from "next/image";
import about1img from '../../public/gemini_ac.png';
import about2img from '../../public/gemini_geladeira.png';
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-white py-16 md:py-24" id="about">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Grid divide a tela em 2: Imagens à esquerda, Texto à direita */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* COLUNA 2: Conteúdo de Texto */}
                    <div className="flex flex-col gap-6">
                        
                        {/* Título com destaque na marca */}
                        <div>
                            <span className="text-[#049B8D] font-semibold tracking-wide uppercase text-sm">
                                Sobre a Sebold Refrigeração
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                                Nossa história de compromisso e qualidade
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex tempora iusto magnam. 
                            Velit, cum dolor. Ad sed natus voluptatem quam consectetur fugit? 
                            Quam saepe sequi cum nulla dolorem quis?
                        </p>

                        {/* Lista de Benefícios */}
                        <ul className="space-y-4 my-4">
                            <li className="flex items-center gap-3">
                                <div className="bg-[#049B8D]/10 p-1 rounded-full">
                                    <Check className="text-[#049B8D]" size={20} />
                                </div>
                                <span className="font-medium text-gray-700">Aberto desde 2006</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-[#049B8D]/10 p-1 rounded-full">
                                    <Check className="text-[#049B8D]" size={20} />
                                </div>
                                <span className="font-medium text-gray-700">6 meses de garantia em serviços</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-[#049B8D]/10 p-1 rounded-full">
                                    <Check className="text-[#049B8D]" size={20} />
                                </div>
                                <span className="font-medium text-gray-700">Qualidade é nossa prioridade absoluta</span>
                            </li>
                        </ul>

                        {/* Botões de Ação */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a 
                                target="_blank" 
                                href="https://wa.me/5547997714395?text=Olá vim pelo site e gostaria de saber mais informações." 
                                className="bg-[#049B8D] hover:bg-[#037f73] text-white font-medium flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 duration-300 shadow-md shadow-[#049B8D]/20"
                            >
                                <WhatsappLogoIcon className="w-5 h-5" />
                                Contato via WhatsApp
                            </a>
                            
                            <a 
                                href="#" 
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all hover:scale-105 duration-300 font-medium"
                            >
                                <MapPin className="w-5 h-5 text-[#049B8D]" />
                                Endereço da loja
                            </a>
                        </div>
                    </div>

                    {/* COLUNA 1: Área das Imagens (Visual) */}
                    <div className="relative">
                        {/* Imagem Principal */}
                        <div className="relative w-full h-100 lg:h-125 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={about1img} 
                                alt="Técnico realizando manutenção em ar condicionado"
                                fill
                                quality={100}
                                priority={true}
                                className="object-cover hover:scale-105 duration-500 transition-transform"
                            />
                        </div>

                        {/* Imagem Flutuante (Sobreposta) */}
                        {/* Adicionei 'border-white' grossa para separar visualmente as imagens */}
                        <div className="absolute w-48 h-48 -bottom-6 -right-6 lg:-bottom-12 lg:-right-12 rounded-xl border-4 border-white shadow-xl overflow-hidden hidden md:block">
                            <Image
                                src={about2img} 
                                alt="Detalhe de manutenção em geladeira"
                                fill
                                quality={100}
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}