"use client"


import React,{useState,useRef} from 'react'
import {MapContainer, TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import axios from 'axios'
import LogClickLocation from './LogClickLocation'








// function LogClickLocation() {
//   const map = useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;

//       // Send the lat and lng to the backend to update the region code
//       axios.post('/set-region-code', { lat, lng })
//         .then(response => {
//           console.log('Region code updated successfully:', response.data.regionCode);

//           // Now you can trigger fetching trending videos for the updated region code
//           // You can make another request to /trending-videos here
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     },
//   });

//   return null; // This component doesn't render anything
// }





// function LogClickLocation() {
//   const map = useMapEvents({
//     click(e) {
//       return (

//         e.latlng.lat,e.latlng.lng

//       )
//       // console.log(e.latlng.lat)
//       // console.log(e.latlng.lng)


//     },
//   })
// }


//  function LogClickLocation() {
//     const map = useMapEvents({
//        click(e) {
//         try {
//           const response = axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&apiKey=your_api_key`);
//           console.log(e.latlng.lat,e.latlng.lng);
//         } catch (error) {
//           console.error(error);
//         }
//       },
//     });
//     return null;
//   }








// const LocationMarker= ()=> {
//   const [position, setPosition] = useState(null)
//   const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   )
// }


// async function LogClickLocation() {

//   const map = useMapEvents({
//     click(e) {
//       try{
//         const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&apiKey=your_api_key`);
//         console.log(response.data.features[0].properties.country_code);
//       }
//       catch(error){
//         console.error(error);
//       // Logs the latitude and longitude
//     }
//   },

//   // return null; // This component does not render anything
// }

// async function LogClickLocation() {

//   const map = useMapEvents({
//     click(e) {
//       try{
//         const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&apiKey=your_api_key`);
//         console.log(response.data.features[0].properties.country_code);
//       }
//       catch(error){
//         console.error(error);
//       // Logs the latitude and longitude
//     }
//   },

//   // return null; // This component does not render anything
// })}








// async function getCountryCode(lat, lon) {
//   try {
//     const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&apiKey=your_api_key`);
//     return response.data.features[0].properties.country_code;
//   } catch (error) {
//     console.error(error);
//   }

// }
// console.log(e.latlng.lat,e.latlng.lng)





// function LogClickLocation() {
//   const [clickedLocation, setClickedLocation] = useState(null);
//   const map = useMapEvents({
//     click(e) {
//       setClickedLocation(e.latlng);
//     },
//   });

//   return clickedLocation ? (
//     <p>Clicked location: Latitude: {clickedLocation.lat}, Longitude: {clickedLocation.lng}</p>
//   ) : null;
// }













const Map  = () => {

  
  return (

    <>
    
   
    

     

<MapContainer 
      style={{
        height:'100vh',
        width:'65vw',
        marginRight:'-10px',
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        

      }}
      center={[15,74]}
      zoom={3 }
      scrollWheelZoom={false}

      >
        <TileLayer style={{
          width:'100%',
          height:'100%'




        }}
        attribution='
        <a href="https://www.google.com/maps">Google Maps</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

    
{/* 
        <LocationMarker/> */}

        
        


        <LogClickLocation/>

     
         
        



      </MapContainer>
      

  


      



     
      

     
    </>
  )
}

export default Map