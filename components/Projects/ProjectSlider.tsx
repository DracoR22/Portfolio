'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from "next/image";

// PROJECTS
const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'Video streaming platform',
            path: '/work/midnight.png',
          },
          {
            title: 'Multivendor e-commerce',
            path: '/work/andromeda.png',
          },
          {
            title: 'Social media app',
            path: '/work/silkpath.png',
          },
          {
            title: 'Notes app',
            path: '/work/elixir.png',
          },
        ],
      },
      {
        images: [
          {
            title: 'AI image generator',
            path: '/work/dino.png',
          },
         
        ],
      },
    ],
  };

const ProjectSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{ clickable: true }} modules={[Pagination]} className="h-[280px] sm:h-[480px]">
       {workSlides.slides.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
           <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
             {slide.images.map((image, i) => {
              return (
                <div key={i} className="relative rounded-lg overflow-hidden flex items-center justify-center
                group">
                  <div className="flex items-center justify-center relative overflow-hidden">
                    {/* IMAGE */}
                    <Image src={image.path} alt="" width={500} height={300} className="object-cover"/>
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-green-300
                    to-green-500 opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* TITLE */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                    group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="gap-y-2">
                        {/* TITLE PART 1 */}
                        <div className="text-[13px] font-semibold delay-100">Ttile part 1</div>
                        {/* TITLE PART 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0">Ttile part 2</div>
                        {/* ICON */}
                        <div>icon</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
             })}
           </div>
          </SwiperSlide>
        )
       })}
    </Swiper>
  )
}

export default ProjectSlider