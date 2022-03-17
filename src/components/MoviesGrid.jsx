
import { useEffect,useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MoviesCard";
import s from "./MoviesGrid.module.css"
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import {Empty} from "./Empty"


export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading]=useState(true)
   const [page, setPage]= useState(1)
   const [hasMore, setHasMore]= useState(true)

const query =useQuery()
const search= query.get("search")
  
    useEffect(() => {
        setIsLoading(true)
        const searchUrl= search 
        ? "/search/movie?query=" + search +"&page=" + page
        : "/discover/movie?page=" + page;
      get(searchUrl).then((data) => {
        setMovies(prevMovies => prevMovies.concat (data.results));
        setHasMore(data.page<data.total_page)
        setIsLoading(false)
      });
    }, [search,page]);

  if( !isLoading && movies.length === 0){
    return <Empty/>

  }
    return (
      <InfiniteScroll
      dataLength={movies.length}
      hasMore={true}
      next={()=> setPage((prevPage)=> prevPage + 1)}
      loader={<Spinner/>}
      >
      <ul className={s.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      </InfiniteScroll> 
    );
  }