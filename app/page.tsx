import { Ambiente } from "@/components/Ambiente";
import { Carrossel } from "@/components/Carrossel";
import { Map } from "@/components/Map";
import { Partners } from "@/components/Partners";

export default function Home() {
  const mock = [
    {
      title: 'aprovado 1',
      url: 'https://i.ibb.co/C56hb8pq/capa-site-1.jpg',
    },
    {
      title: 'aprovado 2',
      url: 'https://i.ibb.co/Kc8DDFLD/capa-site-2.jpg',
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
