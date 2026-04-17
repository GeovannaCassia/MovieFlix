import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import logo from "../Assets/img/Logo_MovieFlix_cortada.png"

import SearchBar from "../Components/Search/SearchBar";
import ListResults from "../Components/Search/ListResult";
import Footer from "../Components/Footer";

import { searchMovies } from "../Services/movieService";

function SearchPage() {
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

    if (q) {
      fetchSearchMovies();
    }
  }, [searchParams]);

  return (
    <>
      <div className="min-h-screen flex flex-col">

        <SearchBar query={query} onQueryChange={setQuery} />

        <main className="flex-1">
          {
            query ?
              <ListResults movies={movies} search={query} />
              :
              <div className="flex flex-col items-center justify-center h-full text-center mt-16">
                <img 
                  src={logo} 
                  alt="Logo MoveFlix" 
                  width="100px" 
                  height="100px" 
                />
                <p className="lg:text-2xl text-xl text-gray-400">
                  O que você quer assistir hoje?
                </p>
              </div>
          }
        </main>

        <Footer />
      </div>
    </>
  )
};

export default SearchPage;