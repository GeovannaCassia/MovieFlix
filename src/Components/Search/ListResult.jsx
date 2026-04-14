import Card from "../Card";

function ListResults({ movies, search, genre }) {
  return (
    <div>
        {search && <p className="title my-4 mx-28">Resultados para "{search}"</p>}
        {genre && <p className="title my-4 mx-28"> Filmes de {genre}</p>}
        <div className="flex flex-wrap justify-center gap-2">
            {(movies || []).map((movie) => (
                <div
                    key={movie.id || movie.imdbID || movie.title}
                    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1"
                >
                    <Card movie={movie} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListResults;