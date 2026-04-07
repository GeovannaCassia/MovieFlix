import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../Utils/image";

function Card({movie}) {
    const navigate = useNavigate()
    return(
        <div className="w-full bg-[#1C1C1C] rounded-md overflow-hidden cursor-pointer transition-transform hover:scale-105" onClick={() => navigate(`/details/${movie.id}`)}>
            <img className="w-full h-auto block" src={getImageUrl(movie.poster_path, 'w154')} alt={movie.title || movie.name || 'Movie poster'} />
        </div>
    )
}

export default Card;