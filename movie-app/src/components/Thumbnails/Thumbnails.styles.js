import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    max-height: 315px;
    min-height: 315px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: fade 0.5s;

    :hover {
        opacity: 0.8;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }    
`;