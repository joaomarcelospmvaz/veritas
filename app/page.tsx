import { Ambiente } from "@/components/Ambiente";
import { Carrossel } from "@/components/Carrossel";
import { Map } from "@/components/Map";
import { Partners } from "@/components/Partners";

export default function Home() {
  const mock = [
    {
      title: 'matriculas abertas',
      url: 'https://i.ibb.co/SXBtXKy0/banner-site-veritas-2.jpg',
    },
    {
      title: 'editora do brasil',
      url: 'https://i.ibb.co/j9kLhc64/banner-site-veritas-1.jpg',
    },
    {
      title: 'transformação',
      url: 'https://i.ibb.co/wZM4nd18/banner-site-veritas.jpg',
    },
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
