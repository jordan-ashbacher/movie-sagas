import "./MovieDetails.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MovieDetail = () => {
  const history = useHistory();
  const movie = useSelector((store) => store.details);

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <ul className="genreList">
        {movie.genres.map((genre) => {
          return <li>{genre}</li>
        })}
      </ul>
      <button onClick={handleClick}>Back to List</button>
    </div>
  );
};

export default MovieDetail;
