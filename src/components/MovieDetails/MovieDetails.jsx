import "./MovieDetails.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const MovieDetail = () => {
  const history = useHistory();
  const movie = useSelector((store) => store.details);

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div key={movie.id} className="detailsContainer">
      <Card key={movie.id} className="cardDetailsContainer">
        <CardActionArea>
          <CardMedia
            className="detailsMedia"
            image={movie.poster}
            title={movie.title}
          />
        </CardActionArea>
      </Card>
      <ul className="genreList">
        {movie.genres.map((genre, i) => {
          return <li key={i}>{genre}</li>
        })}
      </ul>
      <p className="movieDescription">{movie.description}</p>
      <button onClick={handleClick}>Back to List</button>
    </div>
  );
};

export default MovieDetail;
