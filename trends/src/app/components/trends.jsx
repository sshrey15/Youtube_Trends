// "use client"
// import { useEffect, useState } from 'react';



// const apiKey = 'AIzaSyAbe49lFzpldWIGvzc9KNLs_wGlbK7foX0';
// const regionCode = 'US';

// function TrendingVideos() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Make a GET request to your Express.js backend to fetch trending videos
//     fetch(`http://localhost:3001/trending`)
//       .then(response => response.json())
//       .then(data => {
//         setVideos(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1
//       style={{
//         textAlign: 'center',
//         color: 'red',
//         fontFamily: 'sans-serif',
//       }}
//       >Trending YouTube Videos</h1>
//       <ul>
//         {videos.map((video, index) => (
//           <li key={index}>
//             <h2
//             className='red'
          
//             >{video.title}</h2>
//            <p>Keywords: {video.keywords.join(', ')}</p> 
//             <img src={video.thumnail.medium.url} 
//             width={video.thumnail.medium.width}
//             height={video.thumnail.medium.height}
//             alt="Thumnail" />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TrendingVideos;
