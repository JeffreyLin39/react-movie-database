import {useState, useEffect, useCallback} from 'react';
import { API_Functions } from '../API';

export const useMovieFetch = movieID => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setError(false);
            setLoading(true);
            const movie = await API_Functions.getMovie(movieID);
            const credits = await API_Functions.getCredits(movieID);
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...movie, 
                actors: credits.cast,
                directors
            });

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, [movieID]);

    useEffect(()=>{
        fetchData();
    }, [movieID, fetchData]);

    return {state, loading, error};
}