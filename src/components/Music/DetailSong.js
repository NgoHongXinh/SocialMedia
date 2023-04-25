import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1'>
            <div className="fixed top-0">
                <h2 className='text-cyan-500 font-bold'>Now playing</h2>
                <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
                <div className='mt-10 w-[20vw] h-auto'>
                    <img class="flex-none rounded-lg bg-slate-100" src={song.links.images[0].url} alt='avatar' />
                </div>
                <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[8vw] rounded-full' src={song.links.images[1].url} alt='avatar' />
                <span className='text-sm text-white'>{song.author}</span>
                </div>
            </div>
        </div>
  )
}
