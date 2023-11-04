// Importing ES6 modules
import express from 'express';
import fetch from 'node-fetch';
import Sentiment from 'sentiment';
import cors from 'cors';



const app = express();
const PORT = process.env.PORT || 3001;
const apiKey = 'AIzaSyDER1pdHL7aJCE8uiRQ-mAOM615_Ge4l2Q';

var regionCode = 'in'; // Change to your desired region code
// var countryName='India';
// Function to fetch video comments
async function fetchVideoComments(videoId) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&videoId=${videoId}&part=snippet`);
    const data = await response.json();
    const comments = data.items.map(item => item.snippet.topLevelComment.snippet.textDisplay);
    return comments;
  }

app.use(cors());
app.use(express.json());





async function getCountryCode(lat, lng) {
    try {
      // Make a request to the Geoapify API to reverse geocode coordinates
      const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=6e0d9f4996ba4639bf628a6caab27c08`);
      const data = await response.json();
  
      if (data.features && data.features.length > 0) {
        // Extract the country code from the response
        const countryCode = data.features[0].properties.country_code.toUpperCase();
        const countryName = data.features[0].properties.country;
        console.log(`Country code found: ${countryCode}`);
        return countryCode;
      } else {
        console.error('Country code not found for coordinates:', lat, lng);
        return null; // Return null if no country code is found
      }
    } catch (error) {
      console.error('Error while converting coordinates to country code:', error);
      return null; // Return null in case of an error
    }
  }





app.post('/set-region-code',async (req, res) => {
    console.log("hi");
    const latlang = fetch(`http://localhost:3000/set-region-code`);
        const { lat, lng } = req.body;
        console.log(req.body);
    const countryCode = await getCountryCode(lat, lng);
    
  
    if (countryCode) {
        regionCode = countryCode;
    //     res.json({ message: 'Region code updated successfully'
        
    //  });
       // console.log(regionCode);
        res.json(regionCode);
        // console.log(res);
        return regionCode;
    }else{
        res.status(404).json({ error: 'Country code not found' });
    }
});
   





app.get('/trending', async (req, res) => {
  try {
    // Make an API request to get trending videos for the specified region
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&key=${apiKey}`);
    const data = await response.json();

    const trendingVideos =await Promise.all(data.items.map(async(video) => {
      const videoTitle = video.snippet.title;
      const videoCategory = video.snippet.categoryId; // Genre/category ID
      const videoKeywords = video.snippet.tags; // Trending keywords/tags
      const thumbnailUrls = video.snippet.thumbnails;

      const videoComments = await fetchVideoComments(video.id);

      const sentiment = new Sentiment();
      const sentimentScore = sentiment.analyze(videoComments.join(' ')); // Join comments into a single string
      const sentimentPercentage = ((sentimentScore.score / sentimentScore.tokens.length) * 100).toFixed(2); // Calculate sentiment score as a percentage  

      return {
        title: videoTitle,
        genre: videoCategory,
        keywords: videoKeywords,
        thumnail: thumbnailUrls,
        comments: videoComments,
        sentimentScore: sentimentPercentage,
      };
    }));

    res.json(trendingVideos);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from YouTube.' });
  }

 
});






app.listen(PORT, () => {
  console.log( `Server is running on port ${PORT}`);
});


// function getCountryCode(lat,lng) {

//     fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=6e0d9f4996ba4639bf628a6caab27c08`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.features && data.features.length > 0) {
//         const countryCode = data.features[0].properties.country_code.toUpperCase();
//         regionCode = countryCode; // Update the region code
//         console.log(`Region code updated to ${regionCode}`)
//         res.json({ message: 'Region code  updated successfully', regionCode });
//       } else {
//         res.status(404).json({ error: 'Country code not found' });
// }
// }).catch(error => {
//   console.error('Error:', error);
//   res.status(500).json({ error: 'An error occurred while converting coordinates.' })
// });

// }

