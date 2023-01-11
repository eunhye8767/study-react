import React from 'react'

import requests from '../../api/requests';
import Banner from '../../components/Banner';
import Row from '../../components/Row';

export default function MainPage() {
  return (
    <div>
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
    </div>
  )
}
