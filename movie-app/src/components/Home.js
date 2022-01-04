import React from 'react';

import { useHomeFetch } from '../hooks/useHomeFetch';
import { Image_URL } from '../API';
import FrontImage from './FrontImage';
import Grid from './Grid';
import Thumbnails from './Thumbnails';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Button from './Button';

import NoImage from '../images/no_image.jpg';

const poster_size = Image_URL.poster_size;
const Backdrop_size = Image_URL.Backdrop_size;
const URL = Image_URL.URL;



const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    
    if (error) return <div>Something went wrong</div>

    return (
        <>  
            {!searchTerm && state.results[0] ? (
                <FrontImage
                image={`${URL}${Backdrop_size}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header = {searchTerm ? 'Search Results' : 'Popular Movies'}>
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

            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>
            )}

        </>
    );
};

export default Home;