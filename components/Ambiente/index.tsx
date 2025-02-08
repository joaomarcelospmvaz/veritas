import Image from "next/image"

export const Ambiente = () => {
  const ambientsList = [
    {
      altText: 'imagem quadra',
      src: 'https://i.ibb.co/GQNsCDkW/quadra.jpg',

      title: 'Quadra Poliesportiva'
    },
    {
      altText: 'espaco kids',
      src: 'https://i.ibb.co/ZzDZ5GjG/espaco-kids.jpg',

      title: 'Espaço Kids'
    },
    {
      altText: 'imagem laboratório',
      src: 'https://i.ibb.co/whQFGKC5/laboratorio.jpg',

      title: 'Laboratório'
    },
    {
      altText: 'imagem piscina',
      src: 'https://i.ibb.co/mV2VMccL/piscina.jpg',

      title: 'Piscina'
    },
    // {
    //   altText: 'imagem Militar',
    //   src: 'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',

    //   title: 'Ed. Infantil'
    // },
    // {
    //   altText: 'imagem Raiz',
    //   src: 'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',
    //   title: 'Ens. Fundamental '
    // },
    // {
    //   altText: 'imagem Bilingue',
    //   src: 'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',

    //   title: 'Sala de Ballet'
    // },
    // {
    //   altText: 'imagem Raizes',
    //   src: 'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',

    //   title: 'Cantina'
    // },
    // {
    //   altText: 'imagem Editora',
    //   src: 'https://static.canva.com/web/images/87e22a62965f141aa08e93699b0b3527.jpg',

    //   title: 'Ens. Médio'
    // },
    {
      altText: 'patio',
      src: 'https://i.ibb.co/fYc7kX8Z/patio.jpg',

      title: 'Pátio'
    },
  ]
  return (
    <div className="mt-6 py-6 flex flex-col justify-center items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-4 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          Aqui é <span className="text-white ml-1">sucesso</span> <span className="text-white text-2xl bg-[#204111] -rotate-6 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">no ensino</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Conheça um pouco do nosso ambiente escolar</p>
        <a href="https://api.whatsapp.com/send/?phone=%2B5521983181006&text&type=phone_number&app_absent=0" target="_blank"
          className="py-3 px-5 text-lg text-white bg-[#204111] rounded-[32px]">Entre em contato</a>
      </div>
      <div className="bg-[#4F8E34] rotate-45 w-24 h-24 -mt-12 -z-10 mb-4 md:mb-8" />
      <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-evenly w-full px-4 flex-wrap my-8 max-w-[1320px]">
        {ambientsList.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-4 flex-col">
            <Image src={item.src} width={160} height={160} alt={item.altText} className="w-24 h-24 xxs:w-32 xxs:h-32 md:w-40 md:h-40 rounded-2xl" />
            <p className="text-[#204111] text-base xxs:text-lg  max-w-[160px] text-center text-nowrap">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-4 items-center justify-center">

        <p className="text-5xl text-white font-bold text-center">Quer conhecer ainda mais?</p>
        <p className="text-3xl text-white font-bold text-center">Venha visitar a nossa escola.</p>
      </div>
      <div className="bg-[#4F8E34] rotate-45 w-24 h-24 -mt-12 -z-10 mb-4 md:mb-8" />
    </div>
  )
}
