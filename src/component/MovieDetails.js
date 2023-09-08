import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const fetchDetails = async (m) => {
    const f = await fetch(m);
    const json = await f?.json();
    setMovie(json);
  };
  const params = useParams();
  const apiURL = `https://www.omdbapi.com/?i=${params.id}&apikey=42b602aa&s=`;
  useEffect(() => {
    fetchDetails(apiURL);
  }, [apiURL]);

  return (
    <div className="mainBox">
      <div className="details">
        <div className="leftBox">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="rightBox">
          <h1 className="movieTitle">{movie.Title}</h1>
          <h3 className="movieGenre">Genre : {movie.Genre}</h3>
          <h3 className="movieCast">Cast : {movie.Actors}</h3>
          <h3 className="movieRuntime">Runtime : {movie.Runtime}</h3>
          <h3 className="movieImdb">IMDb Rating : {movie.imdbRating}</h3>
          <h4 className="moviePlot">Plot : {movie.Plot}</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
