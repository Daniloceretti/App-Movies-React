import s from "./MovieCard.module.css"
import { Link } from "react-router-dom"

export function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
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