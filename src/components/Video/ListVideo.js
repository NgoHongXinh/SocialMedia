import React, { useContext, useEffect, useState, useRef } from "react";
import { Videos } from "../../Context";
import {DataVideos} from "../../data/video.json"
import axios from "axios";
export default function ListVideo() {
  // const [post, setPost] = React.useState(null);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8080/video/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPost(data)
  //       console.log(data);
  //     })
  // }, [])

  // if (!post) return null;
  const {DataVideos, video}   = useContext(Videos);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="lg:grid grid-cols-3 gap-3 p-5">
      <button  >
            <div className="rounded-lg shadow-lg max-w-lg ">
              <img
                alt="Fwar - Mushrooms video thumbnail"
                src="https://i.ytimg.com/vi/NY76mkzJT6o/maxresdefault.jpg"
                loading="lazy"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 absolute top-[calc(50% - 21px)]">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
              </svg>
            </div>
          </button>
        {
          DataVideos.map(video =>(
            <div className="rounded-lg shadow-lg max-w-lg ">
              <a href="#!">
                <video loop controls className="w-full rounded-xl hover:scale-105"
                
                >
                  <source src={video.sources} type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium">{video.title}</h5>
                <p className="text-gray-700 text-base mb-4">{video.subtitle}</p>
              </div>
            </div>
          ))
        }
        
      </div>
  )
}
