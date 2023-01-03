import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "eb590f23d26955d7ae6c6edc0288ff8e",
    language: "ko-KR",
  }
})

export default instance;