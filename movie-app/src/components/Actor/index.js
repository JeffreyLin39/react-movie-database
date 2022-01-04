import React from "react";
import { Wrapper, Image } from "./Actor.styles";
import PropTypes from 'prop-types';

const Actor = ({name, character, imageURL}) => (
    <Wrapper>
        <Image src={imageURL} alt='actor-thumb' />
        <h3>{character}</h3>
        <h3>{name}</h3>
    </Wrapper>
)

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageURL: PropTypes.string,
}

export default Actor;