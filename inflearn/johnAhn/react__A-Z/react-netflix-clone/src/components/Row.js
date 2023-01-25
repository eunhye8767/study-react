import axios from "../api/axios"
import React, { useEffect, useState } from 'react'

import MovieModal from "./MovieModal";

import "./Row.css"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <div id={id} className="row__posters">
          {/* SEVERAL ROW__POSTER */}
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                loading="lazy"
                alt={movie.name}
                onClick={ ()=> handleClick(movie) }
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

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
