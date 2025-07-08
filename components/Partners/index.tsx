import Image from "next/image"
import Teatro from "@/public/assets/teatro.svg"
import Ballet from "@/public/assets/ballet.svg"
import Ingles from "@/public/assets/ingles.svg"
import Swim from "@/public/assets/swim.svg"
import Ciencia from "@/public/assets/ciencia.svg"
import Raiz from "@/public/assets/raiz.svg"
import Raizes from "@/public/assets/raizes.svg"
import Bilingue from "@/public/assets/bilingue.svg"
import Editora from "@/public/assets/editora.svg"

export const Partners = () => {
  const activitiesList = [
    {
      altText: 'imagem Teatro',
      src: Teatro,
      url: '/projeto-teatral'
    }, {
      altText: 'imagem Ballet',
      src: Ballet,
      url: '/ballet'
    }, {
      altText: 'imagem Ingles',
      src: Ingles,
      url: '/curriculo-bilingue'
    }, {
      altText: 'imagem Swim',
      src: Swim,
      url: '/natacao'
    }, {
      altText: 'imagem Ciencia',
      src: Ciencia,
      url: '/laboratorio'
    },]

  const partnersList = [
    {
      altText: 'imagem Raiz',
      src: Raiz
    },
    {
      altText: 'imagem Bilingue',
      src: Bilingue
    },
    {
      altText: 'imagem Raizes',
      src: Raizes
    },
    {
      altText: 'imagem Editora',
      src: Editora
    },
  ]

  return (
    <div className="w-full max-w-[1320px] flex flex-col justify-center items-center gap-12 mt-8 mx-auto">
      <div className="grid grid-cols-3 md:flex items-center justify-items-center justify-evenly w-full px-4 gap-y-4 gap-x-0 flex-wrap md:max-w-full md:gap-4">
        {activitiesList.map((item, index) => (
          <a href={item.url} key={index} className="w-24 h-24 rounded-[40px] flex items-center justify-center md:w-32 md:h-32 cursor-pointer">
            <Image src={item.src} width={160} height={160} alt={item.altText} />
          </a>
        ))}
      </div>
      <div className="text-4xl font-semibold text-[#204111] text-center -mb-2 md:mb-0">Conheça os nossos parceiros</div>
      <div className="flex items-center justify-evenly w-full px-4 gap-4 flex-wrap">
        {partnersList.map((item, index) => (
          <div key={index} className="w-40 h-20 rounded-[40px] flex items-center justify-center">
            <Image src={item.src} width={160} height={160} alt={item.altText} />
          </div>
        ))}
      </div>
    </div>
  )
}
