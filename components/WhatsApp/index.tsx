import Wpp from "@/public/assets/wpp.svg"
import Image from "next/image"

export const WhatsApp = () => {
  return (
    <a
      className="fixed right-5 bottom-5 animate-bounce cursor-pointer"
      href="https://api.whatsapp.com/send/?phone=%2B5521983181006&text&type=phone_number&app_absent=0"
      target="_blank"
    >
      <Image src={Wpp} alt="logo whatsApp" width={80} height={80} className="h-16 w-16 md:h-20 md:w-20" title="Entre em contato com nosso WhatsApp" />
    </a>
  )
}
