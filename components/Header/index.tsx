import { Logo } from "../Logo"
import { Menu } from "../Menu"

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full h-20 bg-white z-10">
      <div className="flex items-center gap-3 md:gap-6 justify-between px-2 py-4 md:px-4 mx-auto">
        <Logo />
        <div className="flex-1 flex justify-end items-center bg-[#204111] rounded-ss-[32px] rounded-ee-[32px] rounded-se-2xl rounded-es-2xl pr-4 py-1 md:py-2 ">
          <Menu />
        </div>
      </div>
    </header>
  )
}