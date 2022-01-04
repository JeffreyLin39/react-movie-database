import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../hooks/useMovieFetch';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Grid from './Grid';
import { Image_URL } from '../API';

import NoImage from '../images/no_image.jpg';

const poster_size = Image_URL.poster_size;
const URL = Image_URL.URL;


const Movie = () => {

    const {movieID} = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieID);
    if (loading) return <Spinner/>
    if (error) return <div>Something went wrong</div>;
    


    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar time = {movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
            <Grid header='Actors'>
                {movie.actors && movie.actors.map(actor => (
                   <Actor 
                        key = {actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageURL={actor.profile_path ? `${URL}${poster_size}${actor.profile_path}` : NoImage}
                    />
                ))}

            </Grid>
        </>
    )
}

export default Movie;