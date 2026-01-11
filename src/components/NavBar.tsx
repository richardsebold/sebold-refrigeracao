'use client'

import { useState, useEffect } from "react"
import { FacebookLogoIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { MapPin, AlignJustify, X } from "lucide-react"
import Image from "next/image"

export default function NavigationManager() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" },
  ]

  const MobileMenuDropdown = () => (
    <div
      className={`
        w-full bg-white shadow-xl
        border-t-4 border-[#049B8D]
        transition-all duration-500 ease-in-out overflow-hidden
        z-50 md:hidden
        ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
      `}
    >
      <div className="flex flex-col items-center justify-center py-8 gap-6">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-700 hover:text-[#049B8D] transition-colors uppercase tracking-wider"
          >
            {link.name}
          </a>
        ))}

        <a
          href="https://wa.me/554799348969"
          className="mt-4 bg-[#049B8D] text-white px-8 py-3 rounded-full font-bold shadow-md w-3/4 text-center hover:bg-[#038579]"
        >
          SOLICITAR ORÇAMENTO
        </a>
      </div>
    </div>
  )

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
            <WhatsappLogoIcon size={32} color="white" />
            <FacebookLogoIcon size={32} color="white" />
            <InstagramLogoIcon size={32} color="white" />
            <MapPin size={32} color="white" />
          </div>
        </div>

        {!scrolled && <MobileMenuDropdown />}
      </div>

      {/* ================= BARRA ESTÁTICA DESKTOP ================= */}
      <div className="w-full bg-[#049B8D] mt-2 shadow-md relative z-40 hidden md:block">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-bold p-2 hover:bg-white/10 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <WhatsappLogoIcon size={32} color="white" />
            <FacebookLogoIcon size={32} color="white" />
            <InstagramLogoIcon size={32} color="white" />
            <MapPin size={32} color="white" />
          </div>
        </div>
      </div>

      {/* ================= BARRA FIXA ================= */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#049B8D] shadow-xl
        transition-transform duration-500 z-50
        ${scrolled ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto h-20 flex items-center justify-between px-4 relative">

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-md"
            >
              {isMenuOpen ? <X size={32} /> : <AlignJustify size={32} />}
            </button>

            <div className="relative w-32 h-12 bg-white rounded-md overflow-hidden">
              <Image src="/logo-cab.jpg" alt="Logo" fill className="object-contain" />
            </div>

            <div className="hidden md:flex gap-4 text-white font-bold">
              {navLinks.map(link => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/554799348969"
            className="hidden sm:block bg-white text-[#049B8D] px-5 py-2 rounded-full font-bold"
          >
            PEDIR ORÇAMENTO
          </a>
        </div>

        {scrolled && <MobileMenuDropdown />}
      </div>
    </div>
  )
}
