import "../MovieItem/MovieItem.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const MovieItem = ({ movie }) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const getDetails = (e) => {
    console.log(e);
    dispatch({ type: "GET_DETAILS", payload: movie.id });
    history.push("/details");
  };

  return (
    <div key={movie.id} onClick={getDetails}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} />
    </div>
  );
};

export default MovieItem;
