import { getImageUrl } from "../../Utils/image"
import { getYearOfRealesed } from "../../Utils/year"
import { getFormatRuntime } from "../../Utils/runtime"

import { Heart } from "lucide-react"

import RatingStars from "./RatingStars";
import TrailerMovie from "./TrailerMovie";
import { useEffect, useState } from "react";

function DetailsSession({movie}) {
    const [favorite, setFavorite] = useState(false);

    const handleClick = () => {
        window.location.href = movie?.homepage;
    };

    const getFavorites = () => {
        const stored = localStorage.getItem('favorites');

        if (!stored) return [];

        try {
            const parsed = JSON.parse(stored);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    };

    const saveFavorites = (favorites) => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const addFavorite = () => {
        const id = String(movie?.id);
        const favorites = getFavorites();

        if (!favorites.includes(id)) {
            favorites.push(id);
            saveFavorites(favorites);
        }

        setFavorite(true);
    };

    const removeFavorite = () => {
        const id = String(movie?.id);
        const favorites = getFavorites().filter((favoriteId) => favoriteId !== id);

        if (favorites.length > 0) {
            saveFavorites(favorites);
        } else {
            localStorage.removeItem('favorites');
        }

        setFavorite(false);
    };

    useEffect(() => {
        if (!movie?.id) return;
        const id = String(movie.id);
        setFavorite(getFavorites().includes(id));
    }, [movie?.id]);

    return(
        <>
            <div className="flex items-start gap-8 m-10 mb-16">
                <img src={getImageUrl(movie.poster_path, 'w500')} className="rounded-lg" />

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

                    <div className="flex items-center gap-2 mb-4">
                        <button onClick={handleClick} className="rounded-full bg-red-600 px-6 h-[40px]">Assistir</button>

                        <button onClick={() => favorite ? removeFavorite() : addFavorite()} className="rounded-full bg-red-600 px-5 h-[40px] mx-2 flex items-center justify-center gap-2">
                            <Heart fill={ favorite ? "white" : "none"} color="white"/>
                            Favorito
                        </button>
                    </div>

                    <TrailerMovie movieId={movie?.id} backdropPath={movie?.backdrop_path} />
                </div>
            </div>
        </>
    )
}

export default DetailsSession;