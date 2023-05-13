import React from 'react'
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
    className='p-5 text-white h-full'>
        <div>
            Email: Xinhkg00@gmail.com
        </div>
        <div>
            Phone: 0832802655
        </div>

    </motion.section>
  )
}
