import axios from "../api/axios"
import React, { useEffect, useState } from 'react'

import MovieModal from "./MovieModal";

import "./Row.css"

export default function Row({ title, id, fetchUrl, isLargeRow }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"

  // 영화 정보 가져오기 (1)
  const [movies, setMovies] = useState([]);

  // 이미지 클릭 => 모달 팝업 (2)
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});


  // 영화 정보 가져오기 (2)
  useEffect(() => {
    fetchMovieData();
  }, [])
  
  // 영화 정보 가져오기 (3) - 비동기
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }

  // 이미지 클릭 => 모달 팝업 (1)
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <section className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span 
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80
            }}
            >{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {/* SEVERAL ROW__POSTER */}
          {movies.map((movie) => (
            <img 
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
              onClick={ ()=> handleClick(movie) }
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span 
            className="arrow" 
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80
            }}
            >{">"}</span>
        </div>
      </div>

      {/* // 이미지 클릭 => 모달 팝업 (3) */}
      {
        modalOpen && (
          <MovieModal
            {...movieSelected}
            BASE_URL={BASE_URL}
            setModalOpen={setModalOpen} />
        )
      }
    </section>
  )
}
