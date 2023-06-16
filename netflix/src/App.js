
import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Evangadi Familly</h1>
      <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title ="Trending Now" fetchUrl ={requests.fetchTrending} />
      <Row title ="Top Rated" fetchUrl ={requests.fetchTopRatedMovies} />
      <Row title ="Action Movies" fetchUrl ={requests.fetchActionMovies} />
      <Row title ="Comedy Movies" fetchUrl ={requests.fetchComedyMovies} />
      <Row title ="Horror Movies" fetchUrl ={requests.fetchHorrorMovies} />
      <Row title ="Romance Movies" fetchUrl ={requests.fetchRomanceMovies} />
      <Row title ="Documentaries Movies" fetchUrl ={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
