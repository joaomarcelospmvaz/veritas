'use client'

import Image from "next/image"
import menuBurguer from "@/public/assets/menuBurguer.svg"
import { useEffect, useState } from "react"
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
        <div className="w-full px-4 flex flex-col justify-start gap-3 mt-8">
          {/* <a className="text-lg text-[#204111]" href="/quem-somos">Quem somos</a> */}
          <a className="text-lg text-[#204111]" href="/calendario">Calendário</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/horarios">Horário</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/lista-de-material">Lista de Material</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/turmas">Turmas</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/ballet">Ballet</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/curriculo-bilingue">Curriculo Bilingue</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/laboratorio">Laboratório</a>
          <span className="w-full h-[1px] bg-[#204111]"></span>
          <a className="text-lg text-[#204111]" href="/natacao">Natação</a>
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
