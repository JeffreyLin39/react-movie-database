import React from "react";

import { Wrapper, Content, Text } from "./FrontImage.styles";

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
export default FrontImage;