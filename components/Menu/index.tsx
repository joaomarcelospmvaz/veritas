'use client'

import Image from "next/image"
import menuBurguer from "@/public/assets/menuBurguer.svg"
import { useEffect, useState } from "react"

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
        Options
      </div>
    </>
  )
}
