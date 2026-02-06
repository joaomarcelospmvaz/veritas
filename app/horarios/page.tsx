export default function Horarios() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1 text-center">Horários</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">2026</span>
        </p>
      </div>
      <div className="my-12 flex flex-col items-center justify-center w-full max-w-[1320px] flex-wrap gap-8 px-2 text-white font-bold text-lg">
        <div className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          Educação Infantil
        </div>
        <div className="w-full max-w-[340px]">
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            Manhã: <span className="font-normal">7h às 12h</span>
          </p>
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            1ª Semana de Adaptação: <span className="font-normal">8h às 10h</span>
          </p>
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            Tarde: <span className="font-normal">13h às 17h</span>
          </p>
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            1ª Semana de Adaptação: <span className="font-normal">13h às 15h</span>
          </p>
        </div>
        <div className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          Ensino Fundamental I
        </div>
        <div className="w-full max-w-[340px]">
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            Manhã:
          </p>
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            1° ano ao 5° ano: <span className="font-normal">7h às 12h</span>
          </p>
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            Tarde:
          </p>
          <p className="w-full max-w-[340px] text-lg text-[#254a15] text-center font-bold px-2">
            1° ano ao 4° ano: <span className="font-normal">13h às 17h</span>
          </p>
        </div>
        <div className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          Ensino Fundamental II e Ensino Médio
        </div>
        <p className="text-xl text-[#254a15] -mt-2 text-center font-bold"> Clique abaixo para visualizar</p>
        <a href="/files/horarios-6ano.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#254a15] flex justify-center items-center w-full max-w-[340px]">6° ano</a>
        <a href="/files/horarios-7ano.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#476424] flex justify-center items-center w-full max-w-[340px]">7° ano</a>
        <a href="/files/horarios-8ano.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">8° ano</a>
        <a href="/files/horarios-9ano.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#68b311] flex justify-center items-center w-full max-w-[340px]">9° ano</a>
        <a href="/files/horarios-1em.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#254a15] flex justify-center items-center w-full max-w-[340px]">1° ano EM</a>
        <a href="/files/horarios-2em.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#476424] flex justify-center items-center w-full max-w-[340px]">2° ano EM</a>
        <a href="/files/horarios-3em.pdf" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">3° ano EM</a>
      </div>
    </div >
  )
}