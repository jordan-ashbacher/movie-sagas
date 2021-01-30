import '../AddMovie/AddMovie.css'
import {useState} from 'react'

const AddMovie = () => {

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        setNewMovie({...newMovie, [e.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newMovie)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Title"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                required
            />
            <input 
                type="text"
                placeholder="Poster URL"
                name="poster"
                value={newMovie.poster}
                onChange={handleChange}
                required
            />
            <input 
                type="textarea"
                placeholder="Description"
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                required
            />
            <label>Genre:</label>
            <select name="genre_id" id="genre" onChange={handleChange}>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">DramaEpic</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>
            <button type="submit">Add Movie</button>
        </form>
        
    )
}

export default AddMovie