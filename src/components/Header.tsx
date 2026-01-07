import { Services } from "./Services";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { FacebookLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { BadgeCheck, MapPin, TextAlignJustify } from "lucide-react";
import Image from "next/image";


export default function Header() {
  return (
    <header className="flex w-full flex-col justify-center items-center bg-white">

        <div className="bg-[#049B8D] flex flex-col items-center justify-center text-center p-3">
          <p className="text-sm font-semibold">Especialista em instalaçao de Ar Condicionado, conserto de geladeiras e maquina de lavar.</p>

          <div className="bg-[#25D366] mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-sm">
            <WhatsappLogoIcon color="white" size={20} weight="regular" />
            <h2 className="text-sm uppercase">Solicitar um orçamento</h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/logo-cab.jpg" alt="Sebold Refrigeracao" width={400} height={100} />
          <div className="flex flex-col items-center text-center justify-center gap-4">
            <div className="flex gap-1.5">
              <BadgeCheck className="text-[#049B8D]" /> <p>Há mais de 20 anos no mercado</p>
            </div>
            <div className="flex gap-1">
              <MapPin className="text-[#049B8D]" /> <p>Joinville - SC</p>
            </div>
          </div>
        </div>

        <div className="container h-18 mt-10 w-screen bg-[#049B8D] flex items-center justify-between text-center px-2">
          <div className="bg-[#049B8D] w-12 h-12 flex items-center justify-center">
            <TextAlignJustify size={40} color="white" />
          </div>

          <div className="flex gap-2">
            <a href="https://www.facebook.com/profile.php?id=100054529447699" target="_blank" rel="noopener noreferrer">
              <FacebookLogoIcon color="white" size={40} weight="regular" />
            </a>
            <a href="https://www.instagram.com/seboldrefrigeracao/" target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon color="white" size={40} weight="regular" />
            </a>
            <a href="https://share.google/1wgkfG3IX9TkNRiXH" target="_blank" rel="noopener noreferrer">
              <MapPin color="white" size={40}/>
            </a>
          </div>
        </div>

        <Services />

    </header>
  );
}