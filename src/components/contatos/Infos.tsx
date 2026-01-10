import { Mail, MapPin, Phone } from "lucide-react";
import Maps from "./Maps";
import { Separator } from "../ui/separator";

export default function Infos() {
    return (
        <div className="flex flex-col items-center justify-center my-12 gap-12 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-center my-12 gap-12 px-4 md:px-0">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl font-bold">Informações de contato Sebold Refrigeração</h2>
                    <p>Oferecemos servico de emergencia 24/7 para todos os nossos clientes. Voce sempre pode contar com os especialistas da Ar Condicionado Joinville para ajuda-los rapidamente e fazer o trabalho corretamente na primeira vez.</p>
                    <p>Utilizamos equipamentos de diagnóstico de ponta para encontrar a fonte dos seus problemas de aquecimento e ar condicionado e solucioná-los rapidamente.</p>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <Phone size={32} />
                            <h2 className="text-2xl">Telefone</h2>
                        </div>
                        <p>Telefone de contato: +55 47 99934-8969</p>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <Mail size={32} />
                            <h2 className="text-2xl">Email</h2>
                        </div>
                        <p>Email para contato: seboldrefrigeracao@gmail.com</p>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <MapPin className="relative right-1" size={32} />
                            <h2 className="text-2xl">Localização</h2>
                        </div>
                        <p>Localização: +55 47 99934-8969</p>
                    </div>
                </div>
            </div>

            <div className="h-full w-full justify-center items-center">
                <Maps />
            </div>
        </div>
    );
}