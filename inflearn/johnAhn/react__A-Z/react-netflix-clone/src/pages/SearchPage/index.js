import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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

  return (
    <div>SearchPage</div>
  )
}
