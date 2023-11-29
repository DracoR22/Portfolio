'use client'

import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="flex z-[99999] items-center gap-x-5 text-[25px]">
        <a href='https://github.com/DracoR22' target="_blank" rel="noopener noreferrer"  className="hover:text-accent transition-all duration-300 cursor-pointer">
          <FaGithub/>
        </a>

        <Link href='/' className="hover:text-accent transition-all duration-300">
          <FaLinkedin/>
        </Link>
    </div>
  )
}

export default Socials