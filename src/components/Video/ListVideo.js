import React, { useContext, useEffect, useState } from "react";
import { Videos } from "../../Context";
import {DataVideos} from "../../data/video.json"


export default function ListVideo() {

  return (
    <div className="sm:flex">
        <div className="rounded-lg shadow-lg  max-w-lg m-2">
          <a href="#!">
            <video controls className="w-full rounded-t-lg">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Tile</h5>
            <p className="text-gray-700 text-base mb-4">username</p>
            <span>20/20023</span>
          </div>
        </div>
        
      </div>
  )
}
