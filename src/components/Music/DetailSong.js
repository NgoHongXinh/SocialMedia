import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import { motion } from "framer-motion";
export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <motion.div 
        className='col-span-1 mt-10 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
           >
            <div className="fixed top-12 left-0 z-50 p-10">
                <div>
                    <h2 className='text-cyan-500 font-bold'>Now playing</h2>
                    <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
                   
                </div>
                <motion.div 
                className='flex xs:hidden md:hidden sm:hidden lg:flex xl:flex items-center mt-15'>
                    <motion.img 
                     className='w-[10vw] rounded-full p-5'
                     animate={{
                       scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
                       rotate: [5,45, 90, 120, 180,220, 260, 280, 320, 360],
                       borderRadius: ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%" , "50%"]
                     }}
                     transition={{
                       duration: 2,
                       ease: "easeInOut",
                       times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                       repeat: Infinity,
                       repeatDelay: 1,
                     }}
                     src={song.links.images[1].url} alt='avatar' />
                    <div>
                        <span className='text-sm text-white'>{song.author}</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
  )
}
