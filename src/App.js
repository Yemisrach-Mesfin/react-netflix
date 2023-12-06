
import './App.css';
import Row from './Row';
import request from './request';
import Banner from "./Banner"
import Nav from "./Nav"
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORGINALS" fetchUrl={request.fetchNetflixOrginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
