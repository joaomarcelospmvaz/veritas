import Image from "next/image";
import NatacaoImg from "@/public/assets/natacao.jpg"

export default function Natacao() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">NATAÇÃO</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">ESCOLAR</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Atividade curricular até o 5° ano </p>
      </div>
      <p className="text-2xl text-[#fff] text-center mt-10 font-bold px-2 bg-[#FE7A02] p-2 rounded-lg">As aulas terão inicio em Março</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-10 font-bold px-2">As aulas de natação ocorrem durante as atividades de Ed.Física e vão de acordo com o
        cronograma de cada turma. A atividade ajuda no desenvolvimento motor das crianças.
      </p>

      <Image src={NatacaoImg} alt="imagem futsal" className="w-full max-w-[1000px] rounded-xl max-h-96 object-cover my-8" />
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">VENHA FAZER PARTE DO COLÉGIO VERITAS!</p>
    </div>
  )
}