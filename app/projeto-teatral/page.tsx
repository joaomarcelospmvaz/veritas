import Image from "next/image";
import TeatroImg from "@/public/assets/teatro.jpg"

export default function ProjetoTeatral() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">PROJETO</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">TEATRAL</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Projeto educacional do 8° ano ao Ensino Médio</p>
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-10 font-bold px-2">O projeto teatral é desenvolvido com o foco em produzir uma peça a ser apresentada no final do
        ano. Os alunos trabalham diversos desenvolvimentos ao longo do projeto são eles: Comunicação,
        organização, foco, comprometimento e muitos outros.</p>
      <Image src={TeatroImg} alt="imagem futsal" className="w-full max-w-[1000px] rounded-xl max-h-96 object-cover my-8" />
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">VENHA FAZER PARTE DO COLÉGIO VERITAS!</p>
    </div>
  )
}