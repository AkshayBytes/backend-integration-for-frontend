import React, {useState} from "react";

const AddMovieForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        releaseYear: "",
        genre: "",
        director: "",
        actors: "",
        language: "",
        country: "",
        rating: "",
        plot: "",
        awards: "",
        posterUrl: "",
        trailerUrl: "",

    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState, [name]: name === "releaseYear" || name === "rating" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const responce = await fetch("https://bi-1-2-cw.vercel.app/movies",
            {
                method: "POST",
                headers: {
                'Content-Type': "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        if(!responce.ok){
            throw "Failed to add movie."
        }

        const data = await responce.json()

        console.log("Added Movie", data)
        
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <br/>
                <input type="text" name="title" value={formData.title} onChange={handleChange}/>{" "}
                <br/>
                <label>Release Year: </label>
                <br/>
                <input type="number" name="releaseYear" value={formData.releaseYear} onChange={handleChange}/>
                <br/>
                <label>Genre: </label>
                <br/>
                <input type="text" name="genre" value={formData.genre} onChange={handleChange}/>
                <br/>
                <label>Director: </label>
                <br/>
                <input type="text" name="director" value={formData.director} onChange={handleChange}/>
                <br/>
                <label>Actor : </label>
                <br/>
                <input type="text" name="actor" value={formData.actors} onChange={handleChange}/>
                <br/>
                <label>Language: </label>
                <br/>
                <input type="text" name="language" value={formData.language} onChange={handleChange}/>
                <br/>
                <label>Country: </label>
                <br/>
                <input type="text" name="country" value={formData.country} onChange={handleChange}/>
                <br/>
                <label>Rating: </label>
                <br/>
                <input type="text" name="rating" value={formData.rating} onChange={handleChange}/>
                <br/>
                <label>Plot: </label>
                <br/>
                <input type="text" name="plot" value={formData.plot} onChange={handleChange}/>
                <br/>
                <label>Awards: </label>
                <br/>
                <input type="text" name="awards" value={formData.awards} onChange={handleChange} />
                <br/>
                <label>Poster URL:</label>
                <br/>
                <input type="text" name="posterurl" value={formData.posterUrl} onChange={handleChange}/>
                <br/>
                <label>Trailer URL: </label>
                <br/>
                <input type="text" name="trailerurl" value={formData.trailerUrl} onChange={handleChange}/>
                <br/>
                <button>Submit</button>



            </form>
        </div>
    )
}

export default AddMovieForm;