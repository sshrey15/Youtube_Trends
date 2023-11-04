import { useMapEvents } from 'react-leaflet';
import axios from 'axios';
// import cors from 'cors';


function LogClickLocation() {
  const map = useMapEvents({
    click(e) {
        console.log(e.latlng);
      const { lat, lng } = e.latlng
        const data = {lat, lng};
    

    //   axios.post('/set-region-code', data)
console.log(data);
       fetch('http://localhost:3001/set-region-code', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // ,
        body: JSON.stringify(data),
    })
        
        .then(response => {
          console.log( response);
        }).catch((error) => {
          console.error('Error:', error);
        });
    },
    });
//         .then(response => {
//           console.log('maa chuda:', response.data.regionCode);

//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     },
//   });

  return null; // This component doesn't render anything
}

export default LogClickLocation;