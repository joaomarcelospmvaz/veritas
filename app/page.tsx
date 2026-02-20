import { Ambiente } from "@/components/Ambiente";
import { Carrossel } from "@/components/Carrossel";
import { Map } from "@/components/Map";
import { Partners } from "@/components/Partners";

import BannerImg1 from "@/public/assets/banner-site-veritas.jpg"
import BannerImg2 from "@/public/assets/banner-site-veritas-1.jpg"
import BannerImg3 from "@/public/assets/banner-aprovacao1.jpg"
import BannerImg4 from "@/public/assets/banner-aprovacao2.jpg"



export default function Home() {
  const mock = [
    {
      title: 'banner aprovação 1',
      url: BannerImg3.src,
    },
    {
      title: 'banner aprovação 2',
      url: BannerImg4.src,
    },
    {
      title: 'editora do brasil',
      url: BannerImg2.src,
    },
    {
      title: 'transformação',
      url: BannerImg1.src,
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
