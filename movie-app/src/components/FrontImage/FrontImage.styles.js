import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 41%,
        rgba(0, 0, 0, 0.65) 100%
    ),
        url(${({ image }) => image}), var(--darkGray);
    background-size: 100%;
    background-position: center;
    background-color: var(--darkGray);
    background-repeat: no-repeat;
    height: 45rem;
    position: relative;
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
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;
export const Text = styled.div`
    z-index:100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
        font-size: var(--largeFont);

        @media (max-width: 720px) {
            font-size: var(--medFont);
        }
    }

    p {
        font-size: var(--regFont);

        @media (max-width: 720px) {
            font-size: var(--smallFont);
        }        
    }

    @media (max-width: 720px) {
        max-width: 100%;
    }   
`;