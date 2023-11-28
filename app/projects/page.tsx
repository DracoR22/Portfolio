'use client'

import ProjectSlider from "@/components/Projects/ProjectSlider"
import { fadeIn } from "@/variants"
import { motion } from "framer-motion"

const ProjectsPage = () => {
  return (
    <div className="h-full bg-gray-950/30 py-36 flex items-center">
      
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8 py-12">
            {/* TEXT */}
            <div className="text-center flex xl:w-[30vh] flex-col lg:text-left mb-4 xl:mb-0">
                <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden"
                className="h2 xl:mt-8">
                    Projects <span className="text-accent">.</span>
                </motion.h2>
                <motion.p variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                       fwefwefwefwefwefwefwefwefwfe
                </motion.p>
            </div>
            {/* SLIDER */}
            <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden"
            className="w-full xl:max-w-[65%] lg:ml-[70px]">
              <ProjectSlider/>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default ProjectsPage