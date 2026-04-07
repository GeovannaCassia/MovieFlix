import { getImageUrl } from "../../Utils/image";
import { getYearOfRealesed } from "../../Utils/year";
import { getFormatRuntime } from "../../Utils/runtime"

import RatingStars from "./RatingStars";

function DetailsSession({movie}) {

    const handleClick = () => {
        window.location.href = movie?.homepage;
    };

    console.log('movie', movie)

    return(
        <>
            <div className="flex items-start gap-8 m-10 mb-16">
                <img src={getImageUrl(movie.poster_path, 'w342')} className="rounded-lg" />

                <div className="flex-1">
                    <h1 className="title">{movie?.title}</h1>
                    <p className="mb-1 text-gray-500">{getYearOfRealesed(movie.release_date)} {getFormatRuntime(movie.runtime)}</p>

                    <div className="flex items-center gap-2 mb-6">
                        <RatingStars vote={movie.vote_average} />
                        <span className="text-sm text-gray-300">
                            {movie.vote_average?.toFixed(1)} / 10
                        </span>
                    </div>

                    <div className="mb-5">
                        {(movie.genres || []).map((item) => (
                            <span key={item.id} className="mr-2 py-1 px-3 rounded-full border border-red-600">{item.name}</span>
                        ))}
                    </div>

                    <p className="description mb-5">{movie?.overview}</p>
                    <div>
                        <button onClick={handleClick} className="rounded-full bg-red-600 px-6 h-[40px] mb-5">Assistir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsSession;