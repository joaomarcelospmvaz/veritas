import { Carrossel } from "@/components/Carrossel";

export default function Natacao() {
  const mock = [
    {
      title: 'imagem veritas',
      url: 'http://www.veritass.com.br/img/banner-matriculas-2024.jpg',
    },
    {
      title: 'fachada veritas',
      url: 'http://www.veritass.com.br/img/colegio.png',
    },
    {
      title: 'imagem veritas',
      url: 'http://www.veritass.com.br/img/banner-matriculas-2024.jpg',
    },
    {
      title: 'fachada veritas',
      url: 'http://www.veritass.com.br/img/colegio.png',
    },
    {
      title: 'imagem veritas',
      url: 'http://www.veritass.com.br/img/banner-matriculas-2024.jpg',
    }
  ]
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">NATAÇÃO</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">ESCOLAR</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Atividade curricular até o 5° ano </p>
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-10 font-bold px-2">Futsal é o futebol adaptado para prática em uma quadra esportiva por times de 5 jogadores.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">Movimentar o corpo ao praticar um esporte eleva os níveis de felicidade e desenvolvimento.</p>
      <Carrossel mock={mock} />
    </div>
  )
}