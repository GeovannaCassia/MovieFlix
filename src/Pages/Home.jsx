import { getMoviesTopRated, getMoviesTrending, getMoviesUpcoming, getPopularMovies, getSeveralMovies } from '../Services/movieService';

import Carrossel from '../Components/Home/Carrossel';
import Cards from '../Components/ListCards';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';

import { useState, useEffect } from 'react';

function HomePage () {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopRated] = useState([]);
    const [upcomingMovies, setUpcomigMovies] = useState([]);
    const [trendingMovies, setTredingMovies] = useState([]);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async() => {
            const response = await getPopularMovies();
            setPopularMovies(response);
        }

        const fetchTopRatedMovies = async() => {
            const response = await getMoviesTopRated();
            setTopRated(response);
        }

        const fetcUpcomingMovies = async () => {
            const response = await getMoviesUpcoming();
            setUpcomigMovies(response);
        }

        const fetchTredingMovies = async () => {
            const response = await getMoviesTrending();
            setTredingMovies(response);
        }

        const getMoviesLocalStorage = async () => {
            const stored = localStorage.getItem('favorites');

            if (!stored) return [];

            const ids = JSON.parse(stored);

            const response = await getSeveralMovies(ids);
            setFavoriteMovies(response);
        }

        fetchMovies();
        fetchTopRatedMovies();
        fetcUpcomingMovies();
        fetchTredingMovies();
        getMoviesLocalStorage();
    }, [])

    return(
        <>
            <Menu />
            <Carrossel movies={popularMovies} />
            <Cards sessionTitle="Tendências desta semana" movies={trendingMovies} />
            <Cards sessionTitle="Minha lista" movies={favoriteMovies}/>
            <Cards sessionTitle="Melhor avaliados" movies={topMovies} />
            <Cards sessionTitle="Em breve" movies={upcomingMovies} />
            <Footer />
        </>
    )
};

export default HomePage;