import React from "react";

import { Image } from "./Thumbnails.styles";

const Thumbnails = ({image, movieID, clickable}) => (
    <div>
        <Image src={image} alt = 'movie-thumb'/>
    </div>
);

export default Thumbnails;