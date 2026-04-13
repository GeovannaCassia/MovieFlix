import { useEffect, useState } from "react";
import { getVideoYoutube } from "../../Services/movieService";
import { getLinkVideoYoutube } from "../../Utils/video"
import { getImageUrl } from "../../Utils/image";

function TrailerMovie({ movieId, backdropPath }){
    const [isOpen, setIsOpen] = useState(false);
    const [moviesVideos, setMoviesVideos] = useState({});
    const [link, setLink] = useState('')

    useEffect(() => {
        const fetchMovieVideos = async () => {
            const response = await getVideoYoutube(movieId);
            setMoviesVideos(response)
        }

        if(movieId){
            fetchMovieVideos();
        }
    }, [movieId])

    useEffect(() => {
        if(moviesVideos && Array.isArray(moviesVideos) && moviesVideos.length > 0){
            setLink(getLinkVideoYoutube(moviesVideos))
        }
    }, [moviesVideos])


    return (
        link && (
            <div style={styles.container}>
                {!isOpen ? (
                    <div style={styles.thumbnail} onClick={() => setIsOpen(true)}>
                        <img
                            src={getImageUrl(backdropPath)}
                            alt="Trailer"
                            style={styles.image}
                        />
                        <div style={styles.playButton}>▶</div>
                    </div>
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src={link}
                        title="Trailer"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>
        )
    );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "900px",
    height: "350px",
    margin: "20px auto",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#000",
  },
  thumbnail: {
    position: "relative",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    color: "#fff",
    background: "rgba(0,0,0,0.6)",
    borderRadius: "50%",
    padding: "20px",
  },
};

export default TrailerMovie;