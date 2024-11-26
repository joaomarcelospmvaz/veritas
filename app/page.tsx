import { Ambiente } from "@/components/Ambiente";
import { Carrossel } from "@/components/Carrossel";
import { Map } from "@/components/Map";
import { Partners } from "@/components/Partners";

export default function Home() {
  const mock = [
    {
      title: 'imagem veritas',
      url: 'http://www.veritass.com.br/img/banner-matriculas-2024.jpg',
    },
    {
      title: 'fachada veritas',
      url: 'http://www.veritass.com.br/img/colegio.png',
    },
    {
      title: 'imagem veritas',
      url: 'http://www.veritass.com.br/img/banner-matriculas-2024.jpg',
    },
    {
      title: 'fachada veritas',
      url: 'http://www.veritass.com.br/img/colegio.png',
    },
    {
      title: 'imagem veritas',
      url: 'http://www.veritass.com.br/img/banner-matriculas-2024.jpg',
    }
  ]
  return (
    <main className="min-h-[calc(100dvh-112px)] max-w-full">
      <Carrossel mock={mock} bgColor='#4F8E34' />
      <Partners />
      <Ambiente />
      <Map />
    </main>
  );
}
