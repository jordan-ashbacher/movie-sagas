import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";
import AddMovie from "../AddMovie/AddMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/home">The Movies Saga!</Link>
        </h1>
        <nav>
          <span>
            <Link to="/add">ADD A MOVIE</Link>
          </span>
        </nav>
        {/* Movie List / Home page*/}
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/home">
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/detail">
          <MovieDetail />
        </Route>

        {/* Add Movie page */}
        <Route path="/add">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
