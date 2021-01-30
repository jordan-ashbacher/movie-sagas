import "../MovieItem/MovieItem.css"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid'

const MovieItem = ({ movie }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const getDetails = (e) => {
    dispatch({ type: "GET_DETAILS", payload: movie.id })
    setTimeout(() => {
      history.push("/details")
    }, 10)
  }

  return (
    <Grid item>
      <Card key={movie.id} className="cardContainer" onClick={getDetails}>
        <CardActionArea>
          <CardMedia
            className="cardMedia"
            image={movie.poster}
            title={movie.title}
          />
        </CardActionArea>
        <CardContent className="cardTitle">
          <Typography className="titleText" gutterBottom>
            {movie.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    // <div key={movie.id} onClick={getDetails}>
    //   <h3>{movie.title}</h3>
    //   <img src={movie.poster} alt={movie.title} />
    // </div>
  )
}

export default MovieItem
