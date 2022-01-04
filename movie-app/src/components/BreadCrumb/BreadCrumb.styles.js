import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGray);
    color: var(--white);
`;

export const Content = styled.div`
    display:flex;
    width: 100%;
    max-width: var(--maxWidth);

    span {
        font-size: var(--regFont);
        color: var(--white);
        padding-right: 10px;

        @media (max-width: 770px) {
            font-size: var(--smallFont);
        }
    }
`;