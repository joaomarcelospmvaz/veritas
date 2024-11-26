import { Logo } from "@/components/Logo";

export default function Institucional() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex flex-col items-center">
      <div className="w-full py-8 px-2 bg-[#4F8E34] flex flex-col gap-8 items-center justify-center mb-8">
        <p className="uppercase text-[#204111] text-5xl font-black flex items-center justify-center gap-2 flex-wrap">
          <span className="text-white ml-1">QUEM SOMOS</span> <span className="text-white text-4xl bg-[#204111] -rotate-3 mt-2 px-1 xs:-mt-2 mx-5 xs:mx-0">NÓS?</span>
        </p>
        <p className="text-3xl text-white font-bold text-center">Conheça um pouco da nossa história</p>
      </div>
      <Logo />
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center mt-10 font-bold px-2">Em 1979 foi fundado o Maternal e Jardim Faz de Conta no bairro de Cascadura. Nesta época a instituição recebia crianças até a Educação Infantil. Em 1985 a direção atual assumiu e desde então vem se dedicando com seriedade na área da educação. A partir de um trabalho admirado pela comunidade e conquistando uma credibilidade cada vez maior, o Maternal e Jardim Faz de Conta, começou a ganhar uma nova forma a partir do crescimento gradativo das turmas e em 1988 passou a ter o nome fantasia de Colégio Veritas, que em latim significa verdade. O colégio recebia então além de crianças, os adolescentes.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">O crescimento continuava... E em 1994 o colégio conquistou através do empenho dos atuais sócios e a equipe de profissionais competentes que agregam valores à instituição, a sede própria no bairro de Pilares, onde se encontra até hoje em um espaço de 2.400m².</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">Em 2009 completamos 30 anos e não paramos de crescer, a partir deste ano conquistamos mais 2.600m² para o nosso colégio, onde estamos construindo mais área de lazer e quadra de esporte coberto.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">Contudo, agradecemos desde já a confiança atribuída em nosso trabalho através do seu ingresso e permanência em nosso colégio.</p>
      <div className="my-12 flex items-center justify-center w-full max-w-[1320px] flex-wrap gap-4 px-2">
        <div className="rounded-2xl h-10 w-60 bg-[#254a15] flex justify-center items-center text-white text-2xl">Missão</div>
        <div className="rounded-2xl h-10 w-60 bg-[#476424] flex justify-center items-center text-white text-2xl">Visão</div>
        <div className="rounded-2xl h-10 w-60 bg-[#68b311] flex justify-center items-center text-white text-2xl">Valor</div>
      </div>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">O Colégio Veritas faz de seu maior objetivo a busca de uma educação personalizada, voltada para a liberdade e para a solidariedade humana. É uma instituição que se preocupa com o permanente aprimoramento do trabalho pedagógico, visando proporcionar um futuro promissor para seus alunos através de uma educação de alto nível.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">O corpo docente se dedica a inserir constantemente nos programas de ensino atividades abrangentes que incentivem e auxiliem seu crescimento pleno e reconhece a necessidade primordial do trabalho integrado de equipe, articulando-se no sentido de propiciar a seus alunos múltiplas oportunidades de vivências positivas.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">Além das atividades pedagógicas fundamentais, proporcionamos durante o ano letivo, eventos que visam a integração da escola com pais, alunos e a comunidade externa.</p>
      <p className="w-full max-w-[980px] text-2xl text-[#254a15] text-center my-4 font-bold px-2">A Equipe técnico-pedagógica acredita que o processo de ensino deve visar acima de tudo o desenvolvimento das potencialidades do aluno, como elementos de autorealização e a satisfação das suas principais necessidades.</p>
    </div>
  )
}