'use client'

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { BsArrowRight } from "react-icons/bs"
import { useState } from "react"
import Heading from "@/utils/Heading"
import axios from "axios"
import { toast } from "react-toastify"

const ContactPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios.post("https://portfolio-dashboard-qzhp.onrender.com/api/v1/contact/create", { name, email, subject, message })
      toast.success("Your contact request has been sent!")
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong when sending your message")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <Heading title={`Contact`} description="This is my portfolio"
    keywords="nextjs"/>

    <div className="h-full ">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* TEXT & FORM */}
        <div className="flex flex-col w-full max-w-[700px]">
            {/* TEXT */}
            <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden"
             className="h2 text-center mb-12">
                Lets&apos; <span className="text-accent">connect.</span>
            </motion.h2>
            <motion.form onSubmit={onSubmit}
             variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto">
                {/* GROUP */}
               <div className="flex gap-x-6 w-full">
                 <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="name" className="input"/>
                 <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="email" className="input"/>
               </div>
               <input value={subject} onChange={(e) => setSubject(e.target.value)} required type="text" placeholder="subject" className="input"/>
               <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="message" className="textarea"/>

               <button disabled={isLoading} className="btn rounded-full border border-white/50 max-w-[170px] px-8
               transition-all duration-300 flex items-center justify-center overflow-hidden
                hover:border-accent group">
                 <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let&apos; talk
                </span>
                 <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                  group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute
                  text-[22px]"/>
               </button>
            </motion.form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage