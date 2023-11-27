'use client'

import Image from "next/image"

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
       <Image src={'/4k-pitbul-cut-2.png'} width={737} height={678} alt="" className="translate-x-0 w-full object-cover"/>
    </div>
  )
}

export default Avatar