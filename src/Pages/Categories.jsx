import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMoviesOfCategory } from "../Services/movieService"

import ListResults from "../Components/Search/ListResult"
import Menu from "../Components/Menu"
import Footer from "../Components/Footer";

function CategoriesPage () {
    const { id, genre } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await getMoviesOfCategory(id);
            setMovies(response);
        }

        if(id)
            fetchMovies()
    })
 
    return(
        <>
            <Menu />
            <ListResults movies={movies} genre={genre} />
            <Footer />
        </>
    )
};

export default CategoriesPage;