export default function ListaDeMaterial() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1 text-center">Lista de Material</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">2026</span>
        </p>
      </div>
      {/* <p className="text-3xl text-[#254a15] font-bold text-center mt-16">Em breve</p> */}
      <p className="text-3xl text-[#254a15] font-bold text-center mt-16">Clique abaixo para visualizar</p>
      <div className="my-12 flex flex-col items-center justify-center w-full max-w-[1320px] flex-wrap gap-8 px-2 text-white font-bold text-lg">
        <a href="/files/material-maternal2.doc" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          Maternal II
        </a>
        <a href="/files/material-pre1.doc" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          Pré I
        </a>
        <a href="/files/material-pre2.doc" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          Pré II
        </a>
        <a href="/files/material-1ano.docx" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          1º ano
        </a>
        <a href="/files/material-2ano.docx" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          2º ano
        </a>
        <a href="/files/material-3ano.docx" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          3º ano
        </a>
        <a href="/files/material-4ano.docx" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          4º ano
        </a>
        <a href="/files/material-5ano.docx" target="_blank" className="rounded-2xl h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px]">
          5º ano
        </a>
        <a href="/files/material-fundamental-medio.pdf" target="_blank" className="rounded-2xl h-fit min-h-10 px-4 bg-[#4f8e34] flex justify-center items-center w-full max-w-[340px] text-center ">
          Ensino Fundamental II e Ensino Médio
        </a>
      </div>
    </div>
  )
}