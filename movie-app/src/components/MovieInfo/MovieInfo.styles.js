import styled from "styled-components";
import { Image_URL } from "../../API";

const URL = Image_URL.URL;
const Backdrop_size = Image_URL.Backdrop_size;

export const Wrapper = styled.div`
    background: ${({ backdrop}) =>
        backdrop ? `url('${URL}${Backdrop_size}${backdrop}')` : '#000000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: fade 1s;

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    img {
        max-width: 21.875rem;
        max-height: 31.5rem;
    }
    @media (max-width: 780px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    overflow: hidden;
    color: var(--white);

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #ffffff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;
        p {
            margin: 0;
        }
    }
    h1 {
        @media (max-width: 780px) {
            font-size: var(--medFont);
        }
    }
`;