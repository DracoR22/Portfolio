'use client'

import Image from "next/image"
import Link from "next/link"
import Socials from "./Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* LOGO */}
          <Link href={"/"}>
            <h1 className="hidden sm:flex text-2xl font-semibold z-[99999]">
              BRYAN VEGA
            </h1>
            <h1 className="flex sm:hidden text-3xl font-bold z-[99999]">
              B <span className="text-accent">V</span> 
            </h1>
          </Link>
          {/* SOCIALS */}
          <Socials/>
        </div>
      </div>
    </header>
  )
}

export default Header