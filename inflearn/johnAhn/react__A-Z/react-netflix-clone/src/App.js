import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row 
        title="netflix originals" 
        id="NO" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row 
        title="trending now" 
        id="TN" 
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title="top rated" 
        id="TR" 
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Action Moview" 
        id="AM" 
        fetchUrl={requests.fetchActionMovies}
      />
      <Row 
        title="comedy movies" 
        id="CM" 
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
        title="Horrer Movies" 
        id="HM" 
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
        title="romance Movies" 
        id="RM" 
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
        title="documentaries" 
        id="DM" 
        fetchUrl={requests.fetchDocumentaries}
      />

      <Footer />
    </div>
  );
}

export default App;
