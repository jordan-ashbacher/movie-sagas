import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import MovieList from "../MovieList/MovieList"
import MovieDetails from "../MovieDetails/MovieDetails"
import AddMovie from "../AddMovie/AddMovie"

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">
            <Link to="/home">Movie Library</Link>
          </h1>
          <nav>
            <span className="link">
              <Link to="/add">ADD A MOVIE</Link>
            </span>
          </nav>
        </header>

        {/* Movie List / Home page*/}
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/home">
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        <Route path="/add">
          <AddMovie />
        </Route>
      </Router>
    </div>
  )
}

export default App
