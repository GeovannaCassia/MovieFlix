import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMoviesOfCategory } from "../Services/movieService"

import ListResults from "../Components/Search/ListResult"
import Menu from "../Components/Menu"

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
        </>
    )
};

export default CategoriesPage;