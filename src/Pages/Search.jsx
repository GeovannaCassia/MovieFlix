import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../Components/Search/SearchBar";
import ListResults from "../Components/Search/ListResult";

import { searchMovies } from "../Services/movieService";

function SearchPage () {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const q = searchParams.get("query") || "";
      setQuery(q);

      const fetchSearchMovies = async () => {
        const response = await searchMovies(q);
        const filteredMovies = response.filter((item) => item.poster_path);
        setMovies(filteredMovies);
      }

      if(q){
        fetchSearchMovies();
      }

    }, [searchParams]);

    return(
        <>
         <SearchBar query={query} onQueryChange={setQuery} />
         <ListResults movies={movies} search={query} />
        </>
    )
};

export default SearchPage;