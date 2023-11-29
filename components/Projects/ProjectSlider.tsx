'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react"

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiCheck, BiCopy } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs"

// PROJECTS
const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'Video streaming platform',
            path: '/work/midnight.png',
            code: 'https://github.com/DracoR22/midnight',
            url: 'https://midnight-psi.vercel.app/'
          },
          {
            title: 'Multivendor e-commerce',
            path: '/work/andromeda.png',
            code: 'https://github.com/DracoR22/Andromeda2',
            url: 'https://andromeda-pearl.vercel.app/'
          },
          {
            title: 'Discord clone',
            path: '/work/discord.png',
            user: 'monkmonkey56@gmail.com',
            password: 'test435615',
            code: 'https://github.com/DracoR22/discord',
            url: 'https://discord-nine-sable.vercel.app/'
          },
          {
            title: 'Notes app',
            path: '/work/elixir.png',
            user: 'monkmonkey56@gmail.com',
            password: 'test435615',
            code: 'https://github.com/DracoR22/Elixir',
            url: 'https://elixir-livid.vercel.app/'
          },
        ],
      },
      {
        images: [
          {
            title: 'AI image generator',
            path: '/work/dino.png',
            code: 'https://github.com/DracoR22/dino',
            url: 'https://dino-lyart.vercel.app/'
          },
          {
            title: 'Social media app',
            path: '/work/silkpath.png',
            code: 'https://github.com/DracoR22/Silk-Path',
            url: 'https://silk-path.vercel.app/'
          },
          {
            title: 'Real time messaging app',
            path: '/work/whatsme.png',
            user: 'example@gmail.com',
            password: '123456',
            code: 'https://github.com/DracoR22/whatsme',
            url: 'https://whatsme.vercel.app/'
          },
        ],
      },
    ],
  };

const ProjectSlider = () => {

  const [userCopied, setUserCopied] = useState(false)
  const [passwordCopied, setPasswordCopied] = useState(false)


  // COPY TO CLIPBOARD USER
  const onCopyUser = (s: string) => {
    navigator.clipboard.writeText(s)
    setUserCopied(true)

    setTimeout(() => {
       setUserCopied(false)
    }, 1000)
  }

  // COPY TO CLIPBOARD PASSWORD
  const onCopyPassword = (s: string) => {
    navigator.clipboard.writeText(s)
    setPasswordCopied(true)

    setTimeout(() => {
       setPasswordCopied(false)
    }, 1000)
  }

  return (
    <Swiper
    spaceBetween={10}
    pagination={{ clickable: true }} modules={[Pagination]} className="h-[280px] sm:h-[480px]">
       {workSlides.slides.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
           <div className="grid grid-cols-2 grid-rows-2 gap-4">
             {slide.images.map((image, i) => {
              return (
                <div key={i} className="relative rounded-xl overflow-hidden flex items-center justify-center
                group">
                  <div className="flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    {/* IMAGE */}
                    <Image src={image.path} alt="" width={500} height={300} className="object-cover "/>
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black from-transparent via-black
                    to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* TITLE */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                    group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="gap-y-2">
                        {/* TITLE PART 1 */}
                        <div className="text-[15px] font-semibold delay-100">{image.title}</div>
                        {/* TITLE PART 2 */}
                        {image.user && (
                          <>
                           <div className="translate-y-[500%] group-hover:translate-y-0 transition-all
                            duration-300 delay-150 text-sm md:flex items-center hidden">
                              Test user: {image.user}
                               {userCopied && <BiCheck size={22} className="ml-2 text-green-500"/>}
                               {!userCopied && <BiCopy size={20} className="ml-2 cursor-pointer hover:text-accent" onClick={() => onCopyUser(image.user)}/>}
                            </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all
                            duration-300 delay-150 text-sm md:flex items-center hidden">
                              Password: {image.password}
                              {passwordCopied && <BiCheck size={22} className="ml-2 text-green-500"/>}
                              {!passwordCopied && <BiCopy size={20} className="ml-2 cursor-pointer hover:text-accent" onClick={() => onCopyPassword(image.password)}/>}
                            </div>
                            </>
                        )}
                        {/* ICON */}
                        <div className="flex items-center">
                          <a href={image.code} target="_blank">
                           <FaGithub className="text-[20px] mt-3 hover:grow hover:text-accent"/>
                          </a>
                          <a href={image.url} target="_blank"
                           className=" translate-y-[500%] group-hover:translate-y-0 transition-all
                            duration-300 delay-200 ml-4 flex items-center mt-3 text-sm hover:underline">
                           LIVE PROJECT <BsArrowRight size={15}/>
                          </a>
                        </div>
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