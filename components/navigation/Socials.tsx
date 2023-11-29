'use client'

import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[25px] xl:mr-[70px] xxxl:mr-0">
        <a href='https://github.com/DracoR22' target="_blank" rel="noopener noreferrer" 
        className="hover:text-accent transition-all duration-300 cursor-pointer">
          <FaGithub/>
        </a>

        <a href='https://www.linkedin.com/in/bryan-vega-34b3012a2/' target="_blank" rel="noopener noreferrer"
         className="hover:text-accent transition-all duration-300">
          <FaLinkedin/>
        </a>
    </div>
  )
}

export default Socials