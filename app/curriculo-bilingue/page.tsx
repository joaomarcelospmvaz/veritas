import Image from "next/image";
import Bilingue from "@/public/assets/bilingue.svg"
import BilingueImg from "@/public/assets/bilingue.jpg"


export default function Ballet() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">CURRÍCULO</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">BILÍNGUE</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Atividade curricular até o 5° ano do Ensino Fundamental I</p>
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-8 font-bold px-2">PARCEIRO EDUCACIONAL</p>
      <div className="w-40 h-20 rounded-[40px] flex items-center justify-center">
        <Image src={Bilingue} width={160} height={160} alt='logo Be' />
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-8 font-bold px-2">O Be é pioneiro na criação de um Currículo Bilíngue pensado para o desenvolvimento dos estudantes de hoje, contribuindo para sua formação como cidadãos do mundo.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-8 font-bold px-2">Nosso desejo é contribuir para a formação de cidadãos globais, com repertório acadêmico amplo, fluentes e proficientes em duas línguas.</p>
      <Image src={BilingueImg} alt="imagem futsal" className="w-full max-w-[1000px] rounded-xl max-h-96 object-cover mb-8" />
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">VENHA FAZER PARTE DO COLÉGIO VERITAS!</p>

    </div>
  )
}