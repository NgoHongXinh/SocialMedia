import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import { motion } from "framer-motion";

export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState(0);
    const handlePlaySong = (idSong) => {
      setidSong(idSong)
      handleSetSong(idSong)
    };
    useEffect(() => {
      setidSong(song.id)
    }, [song])
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="sm:col-span-2 h-[80vh] overflow-y-srcoll">
        <motion.table className="w-full text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-0">
          <thead className="sticky top-0 dark:bg-gray-700 text-white">
            <tr>
              <th scope="col" class="p-4">#</th>
              <th scope="col" class="p-4">Title</th>
              <th scope="col" class="p-4">Author</th>
              <th scope="col" class="p-4">
                Download
              </th>
            </tr>
          </thead>
          <tbody className="" >
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={`bg-slate-800 text-xs text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td className="text-center">{index + 1}</td>
                <td>{song.name}</td>
                <td className="text-center">{song.author}</td>
                <td className="w-[10%] text-center">
                  <a href={song.url}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>

                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </motion.div>
  )
}
