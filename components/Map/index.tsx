import Loc from "@/public/assets/loc.svg"
import Image from "next/image"

export const Map = () => {
  return (
    <div className="p-6 flex items-center justify-center flex-col gap-8">
      <h3 className="text-4xl font-semibold text-[#204111] text-center" >Como chegar?</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14703.712961420639!2d-43.2920131!3d-22.8791091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997cf85d43bb09%3A0x23a8cc768e70f587!2sCol%C3%A9gio%20Veritas!5e0!3m2!1spt-BR!2sbr!4v1716172075061!5m2!1spt-BR!2sbr"
        style={{ border: 0, width: '90%', maxWidth: '1220px', height: '450px' }}
        loading="lazy"
      />
      <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
        <Image src={Loc} width={32} height={32} alt='loc' />
        <h4 className="text-2xl text-[#204111] text-center">Av.Rio Faleiro, 80 - Pilares - Rio de Janeiro - RJ</h4>
      </div>
    </div>
  )
}
