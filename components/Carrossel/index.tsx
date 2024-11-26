/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useRef, useState } from "react"

export const Carrossel = ({ mock, bgColor }: any) => {

  const [indexImg, setIndexImg] = useState(0)
  const ref = useRef<any>(null);
  const timerRef = useRef<any>(null);

  const scroll = (index: number) => {
    clearTimeout(timerRef.current);
    setIndexImg(index);
    const imageSize = document.getElementById(`image-${index}`)?.clientWidth ?? 0
    if (ref !== null && ref.current) {
      ref.current.scrollTo({
        left: (imageSize * (index)) + (20 * index),
        behavior: "smooth",
      })
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      scroll(indexImg + 1 >= mock.length ? 0 : indexImg + 1)
      setIndexImg(indexImg + 1 >= mock.length ? 0 : indexImg + 1)
      return () => {
        clearTimeout(timerRef.current);
      };
    }, 5000);

  }, [indexImg, mock.length])

  return (
    <div className="w-full py-4 px-1 flex flex-col gap-4 items-center justify-center overflow-hidden" style={{ backgroundColor: bgColor ?? 'transparent' }}>
      <div className="w-full flex gap-5 items-center overflow-x-auto lg:max-w-[980px] no-scrollbar scroll-smooth transition-all" ref={ref} >
        {mock.map((item: any, index: any) => (
          <div className="w-full lg:max-w-[980px] flex-shrink-0" key={index} id={`image-${index}`} >
            <img src={item.url} alt={item.title} className="w-full h-auto rounded-3xl flex-shrink-0" />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-3">
        {mock.map((item: any, index: any) => (
          <div className={`rounded-full ${index === indexImg ? 'bg-[#204111]' : bgColor ? 'bg-white' : 'bg-[#4F8E34]'} w-3 h-3 cursor-pointer`} key={index} onClick={() => (scroll(index))} />
        ))}
      </div>
    </div >
  )
}
