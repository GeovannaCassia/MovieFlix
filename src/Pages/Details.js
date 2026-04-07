import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieId, getRecommendations } from '../Services/movieService';

import ListCard from '../Components/ListCards';
import DetailsSession from "../Components/Details/DetailsSession";
import Menu from "../Components/Menu";
import ListAtors from "../Components/Details/ListAtors";

function DetailsPage () {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchMovieById = async () => {
            const response = await getMovieId(id);
            setMovie(response);
        }

        const fetchRecommendation = async () => {
            const response = await getRecommendations(id);
            setRecommendations(response);
        }

        if(id){
            fetchMovieById();
            fetchRecommendation();
        }
    }, [id]);

    return(
        <>
            <Menu />
            <DetailsSession movie={movie} />
            <ListAtors id={id} />
            <ListCard sessionTitle="Recomendações para você" movies={recommendations} />
        </>
    )
};

export default DetailsPage;