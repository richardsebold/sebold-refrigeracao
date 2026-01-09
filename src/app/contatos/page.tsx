import Maps from "@/components/contatos/Maps";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Mail } from "lucide-react";

export default function Contatos() {
  return (
    <main className="w-full h-screen overflow-hidden">

      <div className="flex flex-col items-center justify-center my-12">
        <h1 className="text-3xl text-[#049B8D] font-semibold">Contato</h1>
        <p className="text-md text-gray-500">Nos envie uma mensagem e faça seu orçamento</p>
      </div>

      <Maps />

      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-12 px-4 md:px-0">

        <div className="flex w-auto gap-2">
          <Mail size={60} color="green" />
          <div className="relative top-1.5">
            <a href="#">
              <p>Tem alguma duvida? Entre em contato</p>
              <h3><strong>seboldrefrigeracao@gmail.com</strong></h3>
            </a>
          </div>
        </div>

        <div className="flex w-full gap-2">
          <WhatsappLogoIcon color="green" size={60} weight="regular" />
          <div className="relative top-1.5">
            <a href="#">
              <p>Whatsapp</p>
              <h3><strong>(47) 99934-8969</strong></h3>
            </a>
          </div>
        </div>


      </div>
    </main>
  );
}