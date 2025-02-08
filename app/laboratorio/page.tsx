import Image from "next/image";
import LaboratorioImg from "@/public/assets/laboratorio.jpg"

export default function Laboratorio() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">LABORATÓRIO</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">DE QUÍMICA</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Atividade de acordo com o calendário de cada turma</p>
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-10 font-bold px-2">O benefício em se ter um laboratório na escola é aplicar a teoria estudada, fazendo com que os
        alunos testem conceitos e desenvolvam experiências de forma prática com os materiais certos.</p>
      <Image src={LaboratorioImg} alt="imagem futsal" className="w-full max-w-[1000px] rounded-xl max-h-96 object-cover my-8" />
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">VENHA FAZER PARTE DO COLÉGIO VERITAS!</p>
    </div>
  )
}