import React from 'react'
import ListVideo from './ListVideo'

import { Videos } from "../../Context";
import DataVideos from "../../data/video.json";

export default function Video() {
  const [post, setPost] = React.useState(null);
  return (
    <div className='mt-10 h-screen'>
     <Videos.Provider value={{DataVideos, post}}>
        <ListVideo/>
     </Videos.Provider>
      
    </div>
  )
}
