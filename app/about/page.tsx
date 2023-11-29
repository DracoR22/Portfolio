'use client'

import Avatar from "@/components/Avatar";
import { useState } from "react"
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import { FaCss3, FaDocker, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql, SiPrisma, SiTailwindcss, SiExpress, SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import CountUp from "react-countup";
import Heading from "@/utils/Heading";

const aboutData: any = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          <FaHtml5/>,
          <FaCss3/>,
          <FaJs/>,
          <FaReact/>,
          <TbBrandNextjs/>,
          <SiTailwindcss/>
        ],
      },

      {
        title: 'Backend',
        icons: [
        <BiLogoPostgresql/>,
        <SiMysql/>,
        <FaDocker/>,
        <SiPrisma/>,
        <SiExpress/>,
        // <SiNestjs/>,
        <FaGolang/>
        ],
      },

    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Frontend Development',
        stage: '2020 - 2023',
      },
      {
        title: 'Backend Development',
        stage: '2020 - 2023',
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];


const AboutPage = () => {

  const [index, setIndex] = useState(0)

  return (
    <>
    <Heading title={`About`} description="This is my portfolio"
    keywords="nextjs"/>

    <div className="h-full bg-gray-950/30 py-32 text-center xl:text-left">
      {/* AVATAR IMAGE */}
      <motion.div variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden"
       className="hidden xl:flex absolute bottom-0 -left-[320px]">
        <Avatar/>
      </motion.div>
      <div className="container xl:ml-[200px] mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* TEXT */}
         <div className="flex-1 flex flex-col justify-center py-16 z-[99999]">
           <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden"
           className="h2">Optimizing for Performance and User <span className="text-accent">
            Experience</span>
          </motion.h2>
           <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden"
            className="max-w-[500px] mx-auto  xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Full time commitment to crafting robust, scalable, and efficient solutions.
           </motion.p>
           {/* COUNTER */}
           <motion.div variants={fadeIn("right", 0.6)} initial="hidden" animate="show" exit="hidden"
           className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 -mb-6">
             <div className="flex flex-1 xl:gap-x-6">
              {/* EXPERIENCE */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
               {/* FINISHED PROJECTS */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={68} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
               {/* AWARDS */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>

             </div>
           </motion.div>
         </div>
         {/* INFO */}
         <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] lg:pt-8">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item: any, i: number) => {
                return (
                  <div key={i} className={`${index === i && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"}
                   cursor-pointer capitalize xl:text-lg relative after:w-8
                   after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                   onClick={() => setIndex(i)}>
                    {item.title}
                  </div>
                )
              })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item: any, i: number) => {
              return (
                <div key={i} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* TITLE */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                   <div className="flex gap-x-4">
                   {/* ICONS */}
                   {item.icons?.map((icon: any, i: number) => {
                    return (
                      <div key={i} className="text-2xl text-white">
                         {icon}
                      </div>
                    )
                   })}
                  </div>
                </div>
              )
            })}
          </div>
         </motion.div>
      </div>
    </div>
    </>
  )
}

export default AboutPage