import {useState, useEffect} from 'react';
import { API_Functions, isPersistedState } from '../API';
const initialState = {
    page: 0, 
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const getMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API_Functions.getMovies(searchTerm, page);
            setState(prev => ({
                ...movies, 
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }


    useEffect(() => {

        if (!searchTerm) {
            const curState = isPersistedState('home');

            if (curState) {
                setState(curState);
                return; 
            }
        }

        setState(initialState)
        getMovies(1, searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMore) return;

        getMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page])

    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('home', JSON.stringify(state));
    }, [searchTerm, state]);

    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore};
}