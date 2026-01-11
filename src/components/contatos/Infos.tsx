import { Mail, MapPin, Phone } from "lucide-react";
import Maps from "./Maps";
import { Separator } from "../ui/separator";

export default function Infos() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16" id="contact">
            
            {/* Grid Principal: Divide o conteúdo em 2 colunas em telas grandes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-start">
                
                {/* Coluna 1: Sobre a Empresa */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Informações de contato <strong className="text-[#049B8D]"><br />Sebold Refrigeração</strong>
                    </h2>
                    
                    <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                        <p>
                            Oferecemos serviço de emergência 24/7 para todos os nossos clientes. 
                            Você sempre pode contar com os especialistas da Ar Condicionado Joinville 
                            para ajudá-los rapidamente e fazer o trabalho corretamente na primeira vez.
                        </p>
                        <p>
                            Utilizamos equipamentos de diagnóstico de ponta para encontrar a fonte 
                            dos seus problemas de aquecimento e ar condicionado e solucioná-los rapidamente.
                        </p>
                    </div>
                </div>

                {/* Coluna 2: Lista de Contatos */}
                <div className="flex flex-col gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                    
                    {/* Item: Telefone */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-[#049B8D]">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900">Telefone</h3>
                            <p className="text-gray-600 mt-1">+55 47 99934-8969</p>
                        </div>
                    </div>

                    <Separator className="bg-gray-200" />

                    {/* Item: Email */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-[#049B8D]">
                            <Mail size={24} />
                        </div>
                        <div className="overflow-hidden"> {/* overflow evita que email longo quebre o layout */}
                            <h3 className="font-bold text-xl text-gray-900">Email</h3>
                            <p className="text-gray-600 mt-1 wrap-break-words">seboldrefrigeracao@gmail.com</p>
                        </div>
                    </div>

                    <Separator className="bg-gray-200" />

                    {/* Item: Localização */}
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-[#049B8D]">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900">Localização</h3>
                            <p className="text-gray-600 mt-1 max-w-xs">
                                Rua Corona Austrális N-61, Jardim Paraiso, Joinville - SC
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Seção do Mapa */}
            <div className="w-full h-100 rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <Maps />
            </div>
        </div>
    );
}