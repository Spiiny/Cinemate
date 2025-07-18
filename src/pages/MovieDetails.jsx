import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import backup from '../assets/backup.png';
import { useTitle } from "../hooks/useTitle";

export const MovieDetails = () => {

  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(()=>{
    async function getMovie() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b7a50a2c94bcad543a7e1cba7c4e0555`);
    const json = await response.json();
    setMovie(json);
  }
    getMovie();
  },[params.id]);
  const url = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backup;
  useTitle(movie.title);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 dark:text-white">
        <div className="max-w-sm">
          <img src={url} alt={`${movie.name}`} />
        </div>
        <div className="max-w-2xl py-3 w-full">
          <h1 className="text-4xl font-bold text-center lg:text-left">{movie.original_title}</h1>
          <p className="text-lg my-5">{movie.overview}</p>
          {movie.genres ? (
            <p className="my-9 text-lg flex flex-wrap gap-y-4">
            {movie.genres.map((item)=>(
              <span className="border border-gray-600 rounded px-2 py-2 mr-4">{item.name}</span>
            ))}
          </p>
          ) : ""}
            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-lg text-gray-900 dark:text-white">{movie.vote_average}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <p className=" text-lg text-gray-900 dark:text-white">{movie.vote_count} reviews</p>
            </div>
            <p className="my-4 text-lg">
                <span className="font-bold ">Runtime: </span>
                <span>{movie.runtime} min</span>
            </p>
            <p className="my-4 text-lg">
                <span className="font-bold ">Budget: </span>
                <span>{movie.budget}</span>
            </p>
            <p className="my-4 text-lg">
                <span className="font-bold ">Revenue: </span>
                <span>{movie.revenue}</span>
            </p>
            <p className="my-4 text-lg">
                <span className="font-bold ">Release Date: </span>
                <span>{movie.release_date}</span>
            </p>
            <p className="my-4 text-lg">
                <span className="font-bold ">IMDB Code: </span>
                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
            </p>

        </div>
      </section>
    </main>
  )
}
