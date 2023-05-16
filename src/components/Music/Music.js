import React from 'react'
import DetailSong from './DetailSong';
import ListSong from './ListSong';
import Playing from './Playing';
import { Songs } from "../../Context";
import DataSongs from "../../data/song.json";
import { useState } from "react";

export default function Music() {
  const [song, setSong] = useState(0)

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
      <div className='mt-0' >
       <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
         <div>
          <Playing/>
          {/* <ListSong/> */}
         </div>
      </Songs.Provider> 
   
        {/* <AudioPlayer tracks={tracks} /> */}
      </div>
  )
}
 