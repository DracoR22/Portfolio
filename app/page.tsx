import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const Home = () => {
  return (
    <div className="h-full">
     <div className="w-full h-full from-primary/10 via-black/30 to-black/10">
       <div className="text-center flex flex-col justify-center xl:pt-40 h-full container mx-auto">
         {/* TITLE */}
         <h1 className="h1">
          Fullstack Developer
         </h1>
         {/* STACK */}
         <div className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">

         </div>
       </div>
     </div>
    </div>
  )
}

export default Home