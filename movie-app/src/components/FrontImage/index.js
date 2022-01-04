import React from "react";

import { Wrapper, Content, Text } from "./FrontImage.styles";
import PropTypes from 'prop-types';

const FrontImage= ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

FrontImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default FrontImage;