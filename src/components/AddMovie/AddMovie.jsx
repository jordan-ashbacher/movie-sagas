import "../AddMovie/AddMovie.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import Button from '@material-ui/core/Button'

const AddMovie = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  //sets inputs for new movie object
  let [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
    genre_id: "",
  })

  //handles input field changes and sets appropriate key/value pair
  const handleChange = (e) => {
    const value = e.target.value
    setNewMovie({ ...newMovie, [e.target.name]: value })
  }

  //dispatches data to sage for addition to db
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_MOVIE", payload: newMovie })
    setNewMovie = {
      title: "",
      poster: "",
      description: "",
      genre_id: "",
    }
    history.push("/")
  }

  //resets newMovie object values and returns user to homepage
  const handleCancel = () => {
    history.push("/")
    setNewMovie = {
      title: "",
      poster: "",
      description: "",
      genre_id: "",
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="movieForm">
        <TextField
          type="text"
          variant="outlined"
          placeholder="Title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          required
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Poster URL"
          name="poster"
          value={newMovie.poster}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          multiline
          rows={8}
          placeholder="Description"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          required
        />
        <FormControl variant="outlined">
          <InputLabel id="genre" className="inputLabel">Genre</InputLabel>
          <Select
            name="genre_id"
            labelId="genre"
            className="genreSelect"
            value={newMovie.genre_id}
            onChange={handleChange}
          >
            <MenuItem value="1">Adventure</MenuItem>
            <MenuItem value="2">Animated</MenuItem>
            <MenuItem value="3">Biographical</MenuItem>
            <MenuItem value="4">Comedy</MenuItem>
            <MenuItem value="5">Disaster</MenuItem>
            <MenuItem value="6">DramaEpic</MenuItem>
            <MenuItem value="7">Epic</MenuItem>
            <MenuItem value="8">Fantasy</MenuItem>
            <MenuItem value="9">Musical</MenuItem>
            <MenuItem value="10">Romantic</MenuItem>
            <MenuItem value="11">Science Fiction</MenuItem>
            <MenuItem value="12">Space-Opera</MenuItem>
            <MenuItem value="13">Superhero</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">Save Movie</Button>
        <Button variant="contained" onClick={handleCancel}>Cancel</Button>
      </form>
    </div>
  )
}

export default AddMovie
