import Image from "next/image";
import Wpp from "@/public/assets/wpp.svg"
import FutsalImg from "@/public/assets/futsal.jpg"

export default function Futsal() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">FUTSAL</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">proativo</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Atividade extracurricular</p>
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-10 font-bold px-2">Futsal é o futebol adaptado para prática em uma quadra esportiva por times de 5 jogadores.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-4 font-bold px-2">Movimentar o corpo ao praticar um esporte eleva os níveis de felicidade e desenvolvimento.</p>
      <p className="text-3xl text-[#254a15] font-bold text-center mt-16">Categorias</p>
      <div className="my-12 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2 text-white font-bold text-lg">
        <div className="rounded-2xl h-10 w-60 bg-[#254a15] flex justify-center items-center">Sub 7</div>
        <div className="rounded-2xl h-10 w-60 bg-[#476424] flex justify-center items-center">Sub 9 / Sub 11</div>
        <div className="rounded-2xl h-10 w-60 bg-[#4f8e34] flex justify-center items-center">Sub 13 / Sub 15</div>
        <div className="rounded-2xl h-10 w-60 bg-[#68b311] flex justify-center items-center">Treinos para Goleiro</div>
      </div>
      <Image src={FutsalImg} alt="imagem futsal" className="w-full max-w-[1000px] rounded-xl max-h-96 object-cover" />
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-8 font-bold px-2">AS INCRIÇÕES SÃO FEITAS DIRETAMENTE COM A EQUIPE PROATIVO</p>
      <a
        className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-8 font-bold px-2cursor-pointer flex justify-center items-center"
        href="https://api.whatsapp.com/send/?phone=%2B5521983181006&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <Image src={Wpp} alt="logo whatsApp" width={80} height={80} className="h-10 w-10 mr-2" title="Entre em contato com nosso WhatsApp" />
        (21) 99747-2594
      </a>
    </div>
  )
}