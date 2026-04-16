import Card from "../Card";

function ListResults({ movies, search, genre }) {
  return (
    <div>
        {search && <p className="title text-2xl lg:text-3xl my-4 lg:mx-28 mx-4">Resultados para "{search}"</p>}
        {genre && <p className="title text-2xl lg:text-3xl my-4 lg:mx-28 mx-4"> Filmes de {genre}</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 px-4 lg:px-28">
            {(movies || []).map((movie) => (
                <Card
                    key={movie.id || movie.imdbID || movie.title}
                    movie={movie}
                />
            ))}
        </div>
    </div>
  )
}

export default ListResults;