import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import DataSongs from "../../data/song.json";


export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setidSong] = useState([]);

    const handlePlaySong = (idSong) => {
      setidSong(idSong)
      handleSetSong(idSong)
    };
    useEffect(() => {
      setidSong(song.id)
    }, [song])

    return (
      // Modal
      <div className="h-full w-full overflow-y-auto overflow-x-hidden outline-none p-4">
        <div>
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            {/* Tile */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                List Song
            </h5>
            {/* body modal */}
            
          </div>
          <div className="relative overflow-y-auto p-4">
              <div className="h-[420px] justify-end  h-15 overflow-y-srcoll">
                <table className="w-full ">
                  <tbody className="p-5 divide-y divide-slate-200" >
                    {DataSongs.map((song, index) => (
                      <tr
                        key={index}
                        className={`text-sm font-bold hover:bg-slate-100 hover:translate-x-0.5 hover:text-black ${idSong === song.id && 'bg-slate-200 text-black'}`}
                        onClick={() => handlePlaySong(song.id)}
                      >
                        <td className="text-center">{index + 1}</td>
                        <td>{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className=" text-center">
                          <a href={song.url}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>

                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
  )
}
