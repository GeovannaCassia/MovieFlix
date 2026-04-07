import { Star } from "lucide-react";
import { getStars } from "../../Utils/stars";

function RatingStars({ vote }){
    const { fullStars, emptyStars, hasHalfStar } = getStars(vote);

    return(
        <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className="text-yellow-400 fill-yellow-400" />
            ))}

            {hasHalfStar && (
                <Star className="text-yellow-400 fill-yellow-200" />
            )}

            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} className="text-gray-400" />
            ))}
        </div>
    )
}

export default RatingStars;