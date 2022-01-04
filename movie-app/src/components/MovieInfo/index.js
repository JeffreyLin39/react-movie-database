import React from "react";

import Thumbnails from "../Thumbnails";
import { Image_URL } from "../../API";
import NoImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from "./MovieInfo.styles";

import PropTypes from 'prop-types';


const URL = Image_URL.URL;
const poster_size = Image_URL.poster_size;

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbnails
                clickable = {false}
                image={
                    movie.poster_path ? URL + poster_size + movie.poster_path : NoImage
                }
                movieID={movie.id}
            >
            </Thumbnails>

            <Text>
                <h1>{movie.original_title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="Score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors && movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors && movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;