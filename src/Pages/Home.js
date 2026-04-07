import { getMoviesTopRated, getMoviesTrending, getMoviesUpcoming, getPopularMovies } from '../Services/movieService';

import Carrossel from '../Components/Home/Carrossel';
import Cards from '../Components/ListCards';
import Menu from '../Components/Menu';

import { useState, useEffect } from 'react';

function HomePage () {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopRated] = useState([]);
    const [upcomingMovies, setUpcomigMovies] = useState([]);
    const [trendingMovies, setTredingMovies] = useState([]);

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

        fetchMovies();
        fetchTopRatedMovies();
        fetcUpcomingMovies();
        fetchTredingMovies();
    }, [])

    return(
        <>
            <Menu />
            <Carrossel movies={popularMovies} />
            <Cards sessionTitle="Tendências desta semana" movies={trendingMovies} />
            <Cards sessionTitle="Melhor avaliados" movies={topMovies} />
            <Cards sessionTitle="Em breve" movies={upcomingMovies} />
        </>
    )
};

export default HomePage;