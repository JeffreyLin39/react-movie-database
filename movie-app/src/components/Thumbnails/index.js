import React from "react";
import { Link } from 'react-router-dom';

import { Image } from "./Thumbnails.styles";
import PropTypes from 'prop-types';

const Thumbnails = ({image, movieID, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieID}`}>
                <Image src={image} alt = 'movie-thumb'/>
            </Link>
        ) : ( <Image src={image} alt = 'movie-thumb'/> )}
        

    </div>
);

Thumbnails.propTypes = {
    image: PropTypes.string,
    movieID: PropTypes.string,
    clickable: PropTypes.bool
}

export default Thumbnails;