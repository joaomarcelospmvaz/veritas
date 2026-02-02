import Image from "next/image";
import orangeCheck from "@/public/assets/orange-check.svg"

export default function Turmas() {

  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">Nossas</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-2 xs:mx-0">TURMAS</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Educação infatil ao Ensino Médio</p>
      </div>
      <div className="mt-8 mb-8 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2 text-white font-bold text-lg">
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#254a15] flex justify-center items-center">Maternal II</div><span className="text-[#254a15]">Crianças de 3 anos</span></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#476424] flex justify-center items-center">Pré I</div><span className="text-[#254a15]">Crianças de 4 anos</span></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#4f8e34] flex justify-center items-center">Pré II</div><span className="text-[#254a15]">Crianças de 5 anos</span></div>
      </div>
      <div className="flex justify-center items-center w-full gap-8 text-[#254a15] text-xl font-bold flex-wrap mb-8">
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Currículo Bilíngue</div>
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Aulas de Natação</div>
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Área Kids</div>
      </div>
      <div className="mt-8 mb-8 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2 text-white font-bold text-lg">
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#254a15] flex justify-center items-center">1° ano E.F</div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#476424] flex justify-center items-center">2° ano E.F</div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#4f8e34] flex justify-center items-center">3° ano E.F </div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#68b311] flex justify-center items-center">4° ano E.F</div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#254a15] flex justify-center items-center">5° ano E.F</div></div>
      </div>
      <div className="flex justify-center items-center w-full gap-8 text-[#254a15] text-xl font-bold flex-wrap mb-8">
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Currículo Bilíngue</div>
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Aulas de Natação</div>
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Educação Financeira</div>
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Socioemocional</div>
      </div>

      <div className="mt-8 mb-8 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2 text-white font-bold text-lg">
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#254a15] flex justify-center items-center">6° ano</div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#476424] flex justify-center items-center">7° ano</div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#4f8e34] flex justify-center items-center">8° ano </div></div>
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#68b311] flex justify-center items-center">9° ano</div></div>
      </div>
      <div className="flex justify-center items-center w-full gap-8 text-[#254a15] text-xl font-bold flex-wrap mb-8">
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Educação Financeira</div>
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Socioemocional</div>
      </div>
      <div className="mt-8 mb-8 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2 text-white font-bold text-lg">
        <div className="flex flex-col justify-center items-center gap-4"><div className="rounded-2xl h-10 max-w-60 w-full min-w-40 bg-[#254a15] flex justify-center items-center">Ensino Médio</div></div>
      </div>
      <div className="flex justify-center items-center w-full gap-8 text-[#254a15] text-xl font-bold flex-wrap mb-8">
        <div className="flex justify-center items-center gap-2"><Image src={orangeCheck} alt="chek laranja" width={24} height={24} />Socioemocional</div>
      </div>
    </div>
  )
}