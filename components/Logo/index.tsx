import LogoVeritas from "@/public/assets/logo.svg"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoVeritas} alt="Logo Colégio Veritas" className="h-8 md:h-10 w-auto" />
    </Link>
  )
}