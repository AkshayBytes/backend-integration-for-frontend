import useFetch from "../useFetch";


const MoviesByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://bi-1-2-cw.vercel.app/movies/${title}`);

   // console.log(data);
    return data ? (
        <div>
            <h2>{data.title}</h2>
            <p>Director: {data.director}</p>
            <p>Country: {data.country}</p>
            <p>Release Year:{data.releaseYear}</p>
            <p>Rating:{data.rating}</p>
            <p>Actors: {data.actors}</p>
            <p>Awards: {data.awards}</p>
            <p>Plot: {data.plot}</p>
            <img src={data.posterUrl}/>
        </div>
    ) : (
        loading && <p>Loading...</p>
    );
};

export default  MoviesByTitle;