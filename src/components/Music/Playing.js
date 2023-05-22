import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../../Context";
import DetailSong from "./DetailSong";
import { motion } from "framer-motion";
import ListSong from "./ListSong";

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs);
    const [open, setOpen] = React.useState(false);
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
    
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 2, delay: 0.2 }}
    className="sm:flex items-center justify-center h-screen mt-5">
        <motion.div
        className="play-music w-[480px] rounded-lg shadow-sm shadow-indigo-500/40">
          <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center p-2 text-2xl text-black rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            >
                <svg
                className={`fill-current h-5 w-5 ${open ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                className={`fill-current h-5 w-5 ${open ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            </button>
          <div className="flex items-center justify-center">
            <DetailSong/>
          </div>
          
        
        <AudioPlayer
          src={song.url}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          autoPlay={true}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}
        />
        
      </motion.div>
      <motion.div 
      className={`block  ${open ? "block" : "hidden"}`}>
            <ListSong/>
      </motion.div>
    </motion.div>
    
  )
}
