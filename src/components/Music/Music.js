import React from 'react'
import DetailSong from './DetailSong';
import ListSong from './ListSong';
import Playing from './Playing';
import { Songs } from "../../Context";
import DataSongs from "../../data/song.json";
import { useState } from "react";


export default function Music() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
      <div className='' >
        <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <div className="md:grid grid-cols-3  gap-2 bg-slate-700 overflow-x-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing/>
      </Songs.Provider>
      </div>
  )
}
