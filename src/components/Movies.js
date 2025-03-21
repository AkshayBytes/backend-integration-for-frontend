import useFetch  from "../useFetch";
const Movies = () => {
    const {data, loading, error} = useFetch("https://bi-1-2-cw.vercel.app/movies");
    //console.log(data)

    return (
        <div>
        <ul>
            {data?.map((movie) => (
                <li key={movie._id}>{movie.title}</li>
            ))}
        </ul>
        </div>
    )
}

export default Movies