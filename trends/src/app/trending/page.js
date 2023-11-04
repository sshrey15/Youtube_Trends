"use client";
import { useEffect, useState } from "react";

import { useMapEvents } from "react-leaflet";

function normalizeThumbnailUrl(video) {
  // Check if both "thumbnails" and "thumnails" properties exist and use the first one found
  if (video.thumbnail && video.thumbnail.medium && video.thumbnail.medium.url) {
    return video.thumbnail.medium.url;
  } else if (
    video.thumnail &&
    video.thumnail.medium &&
    video.thumnail.medium.url
  ) {
    return video.thumnail.medium.url;
  }
  // If neither property exists, return a default URL or handle the case as needed
  return "default-thumbnail-url.jpg";
}

// const apiKey = 'AIzaSyAbe49lFzpldWIGvzc9KNLs_wGlbK7foX0';
// const regionCode = 'US';

function TrendingVideos() {
  const [videos, setVideos] = useState([]);
  // Default to US

  useEffect(
    () => {
      // Make a GET request to your Express.js backend to fetch trending videos
      fetch(`http://localhost:3001/trending`)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      console.log("hi");
    } // Re-run the effect when the region code changes
  );

  return (
    <>
      {/* 
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full"
  
  />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}

      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
        <h1
          style={{
            marginLeft: "35vw",
          }}
        >
          Trending YouTube Videos
        </h1>

        <ul>
          {/* <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '35vw',
        }}
        
        >
        <li>
            
            <h2 className="font-bold text-xl mb-2" >shrye</h2>
            <img src="#3"/>
            <p>djfhks</p>
            </li>
            <li>
                
                <h2 className="font-bold text-xl mb-2" >shrye</h2>
                <img src="#3"/>
                <p>djfhks</p>
                </li>
                <li>
                
                <h2 className="font-bold text-xl mb-2" >shrye</h2>
                <img src="#3"/>
                <p>djfhks</p>
                </li>

        </div> */}

          {videos.map((video, index) => (
            <div
              style={{
                marginLeft: "35vw",
              }}
            >
              <li key={index}>
                <h2
                  style={{
                    alignContent: "center",

                    fontSize: "20px",
                  }}
                >
                  {video.title}
                </h2>
                {/* <p>Keywords: {video.keywords.join(', ')}</p>  */}
                <img
                  class="max-w-sm rounded overflow-hidden shadow-lg flex"
                  src={normalizeThumbnailUrl(video)} // Use the normalizeThumbnailUrl function
                  alt="Thumbnail"
                  width={
                    video.thumbnail?.medium?.width ||
                    video.thumnail?.medium?.width
                  } // Set width and height attributes
                  height={
                    video.thumbnail?.medium?.height ||
                    video.thumnail?.medium?.height
                  }
                />
                <p className="text-gray-700 text-base">
                  Comments : {video.comments.length}
                  <br />
                  Sentiment Score : {video.sentimentScore}%
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TrendingVideos;
