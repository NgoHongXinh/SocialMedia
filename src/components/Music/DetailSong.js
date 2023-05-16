import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import { motion } from "framer-motion";
export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <motion.div 
        className='flex items-center justify-center text-center mt-10 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.1, delay: 0.1 }}
           >
            <div className="card p-10">
                <div>
                    <h2 className='text-current font-bold'>Now playing</h2>
                    <h2 className='text-current text-2xl'>{song.name}</h2>
                    <span className='text-currenttext-sm'>{song.author}</span>
                </div>
                <div 
                className='flex items-center justify-center mt-15'>
                    <motion.img 
                     className='w-[20vh] h-[20vh] rounded-full p-5'
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
                       repeatDelay: 0.1,
                     }}
                     src={song.anh} alt='avatar'/>
                </div>
            </div>
        </motion.div>
  )
}
