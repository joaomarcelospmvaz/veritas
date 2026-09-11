import { Ambiente } from "@/components/Ambiente";
import { Carrossel } from "@/components/Carrossel";
import { Map } from "@/components/Map";
import { Partners } from "@/components/Partners";

import BannerImg1 from "@/public/assets/banner-home-1.jpg"
import BannerImg2 from "@/public/assets/banner-home-2.jpg"
import BannerImg3 from "@/public/assets/banner-home-3.jpg"


export default function Home() {
  const mock = [
    {
      title: 'banner volta as aulas',
      url: BannerImg1.src,
    },
    {
      title: 'banner veritas',
      url: BannerImg2.src,
    },
    {
      title: 'banner matrículas abertas',
      url: BannerImg3.src,
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
