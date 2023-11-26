'use client'

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { stack } from "@/static/stack"
import Image from "next/image"
import ProjectsBtn from "@/components/buttons/ProjectsBtn"

const Home = () => {
  return (
    <div className="h-full ">
       {/* TEXT */}
     <div className="w-full h-full bg-gradient-to-r ">
       <div className="text-center flex flex-col justify-center xl:pt-40 h-full container mx-auto xl:text-left">
         {/* TITLE */}
         <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 ">
           Crafting Excellence <br /> in{' '}
           <span>Every Byte</span>
         </motion.h1>
         {/* SUBTITLE */}
         <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-14">
             Full stack developer, comfortable for
              web, mobile, and API development.
         </motion.div>
         {/* STACK */}
         <div className="hidden sm:flex sm:justify-center xl:justify-start">
           {stack.map((item, i) => (
            <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="flex items-center mx-3" key={i}>
              <div>
              <Image src={item.logo} alt={item.name} width={100} height={100} className="w-[50px] h-[50px]"/>
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
       <div className="w-[600px] h-full absolute right-0 bottom-0">
         {/* BG IMG */}
         <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
         absolute mix-blend-color-dodge translate-z-0">
         </div>
       </div>
    </div>
  )
}

export default Home