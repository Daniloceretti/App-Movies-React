import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import s from "./MovieDetails.module.css"

export function MovieDetails() {
    const { movieId } = useParams();
    const[isLoading,setIsLoading]=useState(true)
    const [movie, setMovie] = useState(null);

  

    useEffect(() => {
        setIsLoading(true)
      get("/movie/" + movieId).then((data) => {
        setMovie(data);
        setIsLoading(false)
      });
    }, [movieId]);
  
    if(isLoading){
        return <Spinner/>;
    }
   
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return <div className={s.detailsContainer}>
        <img className={`${s.col} ${s.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${s.col} ${s.movieDetail}`}>
            <p className={s.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
                <strong>Genres: </strong>{movie.genres.map(ger => ger.name).join(", ")}
            </p>
            <p> <strong>Description:</strong> {movie.overview}
            </p>
        </div>
    </div>
}