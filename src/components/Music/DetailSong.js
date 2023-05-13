import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import { motion } from "framer-motion";
export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className='sm:col-span-1 mt-10 '>
            <div className="fixed top-12 left-0 z-50 p-10">
                <div>
                    <h2 className='text-cyan-500 font-bold'>Now playing</h2>
                    <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
                   
                </div>
                <motion.div 
                className='flex xs:hidden md:hidden lg:flex xl:flex items-center mt-15'>
                    <motion.img 
                     className="box"
                     animate={{
                       scale: [1, 1, 1, 1, 1],
                       rotate: [45, 90, 120, 180, 360],
                       borderRadius: ["0%", "50%", "50%", "50%", "0%"]
                     }}
                     transition={{
                       duration: 2,
                       ease: "easeInOut",
                       times: [0, 0.2, 0.5, 0.8, 1],
                       repeat: Infinity,
                       repeatDelay: 1
                     }}
                    className='w-[10vw] rounded-full p-5' src={song.links.images[1].url} alt='avatar' />
                    <div>
                        <span className='text-sm text-white'>{song.author}</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
  )
}
