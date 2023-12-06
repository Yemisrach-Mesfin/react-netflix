const API_KEY = "1342958340fb4fb8ce79a364a80347b9";
const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default request;
//https://api.themoviedb.org/3`/trending/all/week?api_Key=${API_KEY}&language=en-us`
//https://api.themoviedb.org/3/trending/all/week?api_Key=$1342958340fb4fb8ce79a364a80347b9&language=en-us
//https://api.themoviedb.org/3/trending/all/week?api_key=1342958340fb4fb8ce79a364a80347b9
//https://api.themoviedb.org/3/discover/tv?api_key=1342958340fb4fb8ce79a364a80347b9&with_networks=213y
//https://netflix-clone-bfa94.web.app
//https://netflix-clone-bfa94.web.app