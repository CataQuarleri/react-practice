export default function MovieDisplay({movie}) {
    // The component must return some JSX
    const loaded = ()=> {
        return (
            <>
            <h1>{movie.Title}</h1>
            <p>Actors: {movie.Actors}</p>
            <p>Director: {movie.Director}</p>
            <img src={movie.Poster}/>
            </>
        )
    }
    const loading = ()=> {
        return <h1> No movie to display</h1>
    }
    return movie ? loaded() : loading()
};