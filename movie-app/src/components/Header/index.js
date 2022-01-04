import React from 'react';

import logo from '../../images/react-movie-logo.svg';
import logo2 from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={logo} alt='logo'/>
            <TMDBLogoImg src={logo2} alt = 'logo2'/>
        </Content>
    </Wrapper>
);

export default Header;