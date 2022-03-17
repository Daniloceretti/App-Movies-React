import s from "./MovieCard.module.css"
import { Link } from "react-router-dom"
import placeholder from"../placeholder.jpeg"

export function MovieCard({ movie }) {
    const imageUrl = movie.poster_path 
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
     : placeholder
    return (
        <li className={s.movieCard}>
            <Link to={"/movies/"+movie.id}>
            <img 
            width={230}
            height={345}
            className={s.moviesImage} 
            src={imageUrl} 
            alt={movie.title} />
            <div>
                {movie.title}
            </div></Link>
        </li>
    )

}