import React, {useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import request from "./request";
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchNetflixOrginals);
     
            setMovie(response?.data.results[Math.floor(Math.random() * response.data.results.length)]
            );
            return response;
        }
        fetchData();
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
      <header className="banner" 
      style={{backgroundSize: "cover",
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundPosition: "center center",}}>
          <div className="banner_contents" >
              <h1 className="banner_title">
                  {movie?.title || movie?.name || movie.original_name}
                  
              </h1>
              <div className="banner_buttons">
                  <button className="banner_button">play</button>
                  <button className="banner_button">My List</button>
              </div>
              <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
          </div>
          <div className="banner_fadeBottom"></div>
          
    </header>
  );
}

export default Banner;
// import React, { useEffect, useState } from "react";
// import "./Banner.css";
// import axios from "./axios";
// import request from "./request";

// function Banner() {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(request.fetchNetflixOriginals);
//         const results = response?.data?.results;

//         if (Array.isArray(results) && results.length > 0) {
//           const randomIndex = Math.floor(Math.random() * results.length);
//           const randomMovie = results[randomIndex];
//           setMovie(randomMovie);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
// console.log(movie)
//     fetchData();
//   }, []);

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{movie?.overview}</h1>
//       </div>
//       <div className="banner_fadeBottom"></div>
//     </header>
//   );
// }

// export default Banner;
