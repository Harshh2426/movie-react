import React from "react";
import { Link } from "react-router-dom";

const imdb = "https://www.imdb.com/title/";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return(
        <Link to={`/${imdbID}`}>
            <div className="movieContainer">
                <h3 className="moviecardTitle">{Title}</h3>
                <p className="movieYear">Year: {Year}</p>
                <p className="moviecardType">Type: {Type}</p>
                <img src={Poster} alt="poster" /> 
            </div>
        </Link>
    )
}
 
export default MovieCard;