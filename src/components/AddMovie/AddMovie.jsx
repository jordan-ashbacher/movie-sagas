import '../AddMovie/AddMovie.css'
import {useState} from 'react'

const AddMovie = () => {

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    return (
        <form action="">
            <input 
                type="text"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
                required
            />
            <input 
                type="text"
                placeholder="Poster URL"
                value={newMovie.poster}
                onChange={handleChange}
                required
            />
            <input 
                type="textarea"
                placeholder="Description"
                value={newMovie.description}
                onChange={handleChange}
                required
            />
            <label for="genre">Genre:</label>
            <select name="genre" id="genre">
                <option value="Adventure">Adventure</option>
                <option value="Animated">Animated</option>
                <option value="Biographical">Biographical</option>
                <option value="Comedy">Comedy</option>
                <option value="Disaster">Disaster</option>
                <option value="DramaEpic">DramaEpic</option>
                <option value="Epic">Epic</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Musical">Musical</option>
                <option value="Romantic">Romantic</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Space-Opera">Space-Opera</option>
                <option value="Superhero">Superhero</option>
            </select>
        </form>
        
    )
}

export default AddMovie