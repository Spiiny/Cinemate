import { Route,Routes } from "react-router-dom";
import { MovieList , MovieDetails , MovieSearch ,NotFound } from "../pages"; 


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={< MovieList apiPath="movie/now_playing" title="home" />}  />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="search" element={<MovieSearch apiPath="search/movie" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
