const BASE_URL = "https://image.tmdb.org/t/p/";

export const getImageUrl = (path, size = "original") => {
    if(!path) return null;
    return `${BASE_URL}${size}${path}`;
}