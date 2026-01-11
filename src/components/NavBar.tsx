'use client'

import { useState, useEffect } from "react"
import { FacebookLogoIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { MapPin, AlignJustify, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Contato", href: "#contact" },
]

interface MobileMenuDropdownProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

function MobileMenuDropdown({ isMenuOpen, setIsMenuOpen }: MobileMenuDropdownProps) {
  return (
    <div
      className={`
        w-full bg-white shadow-xl
        border-t-4 border-[#049B8D]
        transition-all duration-500 ease-in-out overflow-hidden
        z-50 md:hidden
        ${isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="flex flex-col items-center justify-center py-4 gap-2">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-bold text-gray-700 hover:text-[#049B8D] transition-colors uppercase tracking-wider border-2 p-2 rounded-md"
          >
            {link.name}
          </a>
        ))}

        <a target="_blank"
          href="https://wa.me/554799348969?text=Olá, vim pelo site e gostaria de saber mais informações"
          className="mt-4 bg-[#049B8D] text-white px-8 py-3 rounded-full font-bold shadow-md w-3/4 text-center hover:bg-[#038579]"
        >
          SOLICITAR ORÇAMENTO
        </a>
      </div>
    </div>
  )
}

export default function NavigationManager() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= BARRA MOBILE ================= */}
      <div className="w-full bg-[#049B8D] mt-2 shadow-md relative z-40 md:hidden">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-md"
            >
              {isMenuOpen ? <X size={32} /> : <AlignJustify size={32} />}
            </button>
          </div>

          <div className="flex gap-3">
            <a target="_blank" href={`https://wa.me/554799348969?text=Olá, vim pelo site e gostaria de saber mais informações.`}>
              <WhatsappLogoIcon size={32} color="white" />
            </a>
            <a target="_blank" href="https://www.facebook.com/p/Sebold-Refrigera%C3%A7%C3%A3o-e-Climatiza%C3%A7%C3%A3o-100054529447699/?locale=pt_BR">
              <FacebookLogoIcon size={32} color="white" />
            </a>
            <a target="_blank" href="https://www.instagram.com/seboldrefrigeracao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <InstagramLogoIcon size={32} color="white" />
            </a>
            <a target="_blank" href='https://maps.app.goo.gl/FDVmjYRr4UWKyo919'>
              <MapPin size={32} color="white" />
            </a>
          </div>
        </div>

        {!scrolled && <MobileMenuDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </div>

      {/* ================= BARRA ESTÁTICA DESKTOP ================= */}
      <div className="w-full bg-[#049B8D] mt-2 shadow-md relative z-40 hidden md:block">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2" data-aos="fade-right">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-bold p-2 hover:bg-white/10 rounded-md hover:scale-110 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a className="transition-all duration-300 hover:scale-110" target="_blank" href={`https://wa.me/554799348969?text=Olá, vim pelo site e gostaria de saber mais informações.`}>
              <WhatsappLogoIcon size={32} color="white" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" target="_blank" href="https://www.facebook.com/p/Sebold-Refrigera%C3%A7%C3%A3o-e-Climatiza%C3%A7%C3%A3o-100054529447699/?locale=pt_BR">
              <FacebookLogoIcon size={32} color="white" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" target="_blank" href="https://www.instagram.com/seboldrefrigeracao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <InstagramLogoIcon size={32} color="white" />
            </a>
            <a className="transition-all duration-300 hover:scale-110" target="_blank" href='https://maps.app.goo.gl/FDVmjYRr4UWKyo919'>
              <MapPin size={32} color="white" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= BARRA FIXA ================= */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#049B8D] shadow-xl transition-transform duration-500 z-50 ${scrolled ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Adicionei 'relative' aqui para a logo poder se centralizar baseada neste container */}
        <div className="container mx-auto h-20 flex items-center justify-between px-4 relative">

          {/* --- 1. LADO ESQUERDO: Botão Mobile + Menu Desktop --- */}
          <div className="flex items-center gap-4">

            {/* Botão Hamburger (Só aparece no Mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={32} /> : <AlignJustify size={32} color="white" />}
            </button>

            {/* Menu Desktop (Links na Esquerda) */}
            <nav className="hidden md:flex gap-6 text-white font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm lg:text-base font-bold p-2 hover:bg-white/10 rounded-md hover:scale-105 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* --- 2. CENTRO: Logo (Absolute para garantir o centro exato) --- */}
          <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-32 h-12 bg-white rounded-md overflow-hidden shadow-sm">
              <Image
                src="/assets/logo-cab.jpg"
                alt="Logo"
                fill
                className="object-contain p-1"
              />
            </div>
          </div>

          {/* --- 3. LADO DIREITO: Botão de Orçamento --- */}
          <div>
            <a
              href="https://wa.me/554799348969"
              className="hidden sm:block bg-white text-[#049B8D] px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-md"
            >
              PEDIR ORÇAMENTO
            </a>
            {/* Espaço vazio no mobile para equilibrar o layout se necessário, ou deixe vazio */}
          </div>

        </div>

        {/* Dropdown do Mobile */}
        {scrolled && <MobileMenuDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </div>
  )
}
