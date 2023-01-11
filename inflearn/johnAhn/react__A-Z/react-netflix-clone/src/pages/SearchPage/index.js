import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import "./SearchPage.css"

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  /**
   *  # Search 페이지에서 SearchTerm 가져오기
   *     ㄴ http://localhost:3000/search?q=dk 일 때
   *     ㄴ useLocation().search  ==>> ?q=dk 이 부분.
   */
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  /**
   *  q로 하게 되면
   *  useLocation().search  ==>> ?q=dk 일 때
   *  q=<< 여기 부분 >> 정보를 가져온다.
   */
  const searchTerm = query.get("q");

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm])

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            return (
              <div className="movie">
                <div className="movie__column-poster">
                  <img src={movieImageUrl} alt="movie_poster" />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>Your search for "{searchTerm} did not have any matches.</p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
          </ul>
        </div>
      </section>
    )
  }

  return renderSearchResults()
}
