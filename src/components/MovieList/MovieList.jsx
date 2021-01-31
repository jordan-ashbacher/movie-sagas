import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./MovieList.css"
import MovieItem from "../MovieItem/MovieItem"
import Grid from '@material-ui/core/Grid'

function MovieList() {
  const dispatch = useDispatch()
  const movies = useSelector((store) => store.movies)

  //gets movies from database on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" })
  }, [])

  return (
    <main>
      <Grid container justify="center" className="movies" spacing={0}>
       
       {/* maps over movies and renders individual movie components */}
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />
        })}
        
      </Grid>
    </main>
  )
}

export default MovieList
