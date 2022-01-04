const Key = process.env.REACT_APP_API_KEY;
const Base_URL = 'https://api.themoviedb.org/3/';
const Search_URL = `${Base_URL}search/movie?api_key=${Key}&language=en-US&query=`;
const Popular_URL = `${Base_URL}movie/popular?api_key=${Key}&language=en-US`;

export const Image_URL = {
  URL: 'http://image.tmdb.org/t/p/',
  Backdrop_size: 'w1280',
  poster_size: 'w780',
}

export const API_Functions = {
  getMovies: async (seach_term, page_num) => {
    let result = seach_term ? `${Search_URL}${seach_term}&page=${page_num}`: `${Popular_URL}&page=${page_num}`;
    return await (await fetch(result)).json()
  },
  getMovie: async movieID => {
    let result = `${Base_URL}movie/${movieID}?api_key=${Key}`;
    return await (await fetch(result)).json()
  },
  getCredits: async movieID => {
    let result = `${Base_URL}movie/${movieID}/credits?api_key=${Key}`;
    return await (await fetch(result)).json();
    }
};

export const calculateTime = time => {
  const h = Math.floor(time / 60);
  const m = time % 60;
  return `${h}h ${m}m`;
};

export const moneyToUSD = money => {
  const convert = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return convert.format(money);
};

export const isPersistedState = stateName => {
  const state = sessionStorage.getItem(stateName);
  return state && JSON.parse(state);
};


