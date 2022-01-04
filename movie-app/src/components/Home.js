import React, {useState, useEffect} from 'react';

import { useHomeFetch } from '../hooks/useHomeFetch';
import { Image_URL } from '../API';
import FrontImage from './FrontImage';
import Grid from './Grid';
import Thumbnails from './Thumbnails';
import NoImage from '../images/no_image.jpg';

const poster_size = Image_URL.poster_size;
const Backdrop_size = Image_URL.Backdrop_size;
const URL = Image_URL.URL;



const Home = () => {
    const {state, loading, error} = useHomeFetch();
    return (
        <>  
            {state.results[0] ? (
                <FrontImage
                image={`${URL}${Backdrop_size}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
                />
            ) : null}
            <Grid header = 'Popular Movies'>
                {state.results.map(movie => (
                    <Thumbnails
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? URL + poster_size + movie.poster_path : NoImage
                        }
                        movieID={movie.id}
                    />
                ))}

            </Grid>
        </>
    );
};

export default Home;