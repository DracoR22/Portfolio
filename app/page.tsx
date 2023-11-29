'use client'

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { stack } from "@/static/stack"
import Image from "next/image"
import ProjectsBtn from "@/components/buttons/ProjectsBtn"
import Avatar from "@/components/Avatar"
import ParticlesContainer from "@/components/transition/ParticlesContainer"
import Heading from "@/utils/Heading"

const Home = () => {
  return (
    <>
    <Heading title={`Home`} description="This is my portfolio"
    keywords="nextjs"/>

    <div className="h-full ">
      {/* PARTICLES */}
      <ParticlesContainer/>
       {/* TEXT */}
     <div className="w-full h-full  ">
       <div className="text-center flex flex-col justify-center pt-40 h-full container mx-auto xl:text-left">
         {/* TITLE */}
         <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 z-[99999]">
           Crafting Excellence <br /> in{' '}
           <span>Every Byte</span>
         </motion.h1>
         {/* SUBTITLE */}
         <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-14 z-[99999]">
             Full stack developer, comfortable for
              web, mobile, and API development.
         </motion.div>
         {/* STACK */}
         <div className="hidden sm:flex sm:justify-center xl:justify-start">
           {stack.map((item, i) => (
            <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="flex items-center mx-3" key={i}>
              <div className="z-[999999]">
              <Image src={item.logo} alt={item.name} width={500} height={500} className="w-[50px] h-[50px] object-contain"/>
              <p className="text-xs py-2">
                {item.name}
              </p>
              </div>
            </motion.div>
           ))}
         </div>
         {/* BUTTON */}
         <div className="flex pt-4 justify-center xl:hidden relative">
           <ProjectsBtn/>
         </div>
         <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="pt-4 hidden xl:flex">
          <ProjectsBtn/>
         </motion.div>
       </div>
     </div>
       {/* IMAGE */}
       <div className=" w-[700px] h-full absolute right-0 bottom-0">
         {/* BG IMG */}
         {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
         absolute mix-blend-color-dodge translate-z-0">
         </div> */}
         
         {/* AVATAR IMG */}
         <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0
         lg:right-[8%]">
          <Avatar/>
         </motion.div>
       </div>
    </div>
    </>
  )
}

export default Home