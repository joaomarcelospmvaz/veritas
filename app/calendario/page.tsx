export default function Calendario() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">Calendário</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">2026</span>
        </p>
      </div>
      <p className="text-3xl text-[#254a15] font-bold text-center mt-16">Clique nos botões abaixo para baixar</p>
      <div className="my-12 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2 text-white font-bold text-lg">
        <a href="/files/calendario-2026.pdf" download className="rounded-2xl h-10 px-4 bg-[#476424] flex justify-center items-center">Educação Infantil ao Ensino Médio</a>
      </div>
    </div>
  )
}