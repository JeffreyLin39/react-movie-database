import React from "react";
import { calculateTime, moneyToUSD } from "../../API";
import { Wrapper, Content } from "./MovieInfoBar.styles";

import PropTypes from 'prop-types';

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calculateTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {moneyToUSD(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {moneyToUSD(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;
