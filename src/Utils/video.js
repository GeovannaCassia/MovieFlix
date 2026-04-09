export const getLinkVideoYoutube = (videos) => {
    const video = videos.find(item => item.type === "Trailer" && item.site === "YouTube");
    
    return video ? `https://www.youtube.com/embed/${video.key}?autoplay=1` : "";
}