export const getStars = (vote) => {
    const safeVote = typeof vote === "number" ? vote : 0;

    const rating = safeVote / 2;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return { fullStars, hasHalfStar, emptyStars };
}