'use client'

import Image from "next/image"
import menuBurguer from "@/public/assets/menuBurguer.svg"
import { useEffect, useState } from "react"
import LogoVeritas from "@/public/assets/logo.svg"
import Link from "next/link"
import Wpp from "@/public/assets/wpp.svg"
import Instagram from "@/public/assets/instagram.svg"
import X from "@/public/assets/x.svg"
import Facebook from "@/public/assets/facebook.svg"


export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image src={menuBurguer} alt="menu" width={36} />
      </button>

      <div id='bg-modal' onClick={() => setIsMenuOpen(!isMenuOpen)} className={`absolute top-0 left-0 w-screen h-screen bg-gray-200 opacity-25 z-20 ${isMenuOpen ? 'block' : 'hidden'}`} />

      <div id='modal' className={`h-screen w-72 xs:w-80 fixed transition-all top-0 right-0 bg-white z-30 ease-in-out duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="cursor-pointer ml-2 mt-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={X} alt="logo instagram" width={80} height={80} className="h-8 w-8" title="Entre em contato com nosso WhatsApp" />
        </div>
        <Link href="/" className="px-4 mt-5 mx-auto w-full flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={LogoVeritas} alt="Logo Colégio Veritas" className="h-8 md:h-10 w-auto" />
        </Link>
        <div className="w-full px-4 flex flex-col justify-start gap-3 mt-8">
          <a className="text-lg text-[#204111]" href="/institucional">Institucional</a>
          <a className="text-lg text-[#204111]" href="/ballet">Ballet</a>
          <a className="text-lg text-[#204111]" href="/curriculo-bilingue">Curriculo Bilingue</a>
          <a className="text-lg text-[#204111]" href="/futsal">Futsal</a>
          <a className="text-lg text-[#204111]" href="/laboratorio">Laboratório</a>
          <a className="text-lg text-[#204111]" href="/natacao">Natação</a>
          <a className="text-lg text-[#204111]" href="/projeto-teatral">Projeto Teatral</a>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <a
            className="cursor-pointer"
            href="https://api.whatsapp.com/send/?phone=%2B5521983181006&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image src={Wpp} alt="logo whatsApp" width={80} height={80} className="h-16 w-16" title="Entre em contato com nosso WhatsApp" />
          </a>
          <a
            className="cursor-pointer"
            href="https://instagram.com/colegioveritas"
            target="_blank"
          >
            <Image src={Instagram} alt="logo instagram" width={80} height={80} className="h-16 w-16" title="Entre em contato com nosso WhatsApp" />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.facebook.com/ColegioVeritasRJ/"
            target="_blank"
          >
            <Image src={Facebook} alt="logo facebook" width={80} height={80} className="h-16 w-16" title="Entre em contato com nosso WhatsApp" />
          </a>
        </div>
      </div>
    </>
  )
}
