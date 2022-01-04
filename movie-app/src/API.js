const Key = process.env.REACT_APP_API_KEY;
const Base_URL = 'https://api.themoviedb.org/3/';
const Search_URL = `${Base_URL}search/movie?api_key=${Key}&language=en-US&query=`;
const Popular_URL = `${Base_URL}movie/popular?api_key=${Key}&language=en-US`;

const Request_URL = `${Base_URL}authentication/token/new?api_key=${Key}`;
const Login_URL = `${Base_URL}authentication/token/validate_with_login?api_key=${Key}`;
const Session_URL = `${Base_URL}authentication/session/new?api_key=${Key}`;

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};
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
    },
  getRequestToken: async () => {
    let result = await (await fetch(Request_URL)).json();
    return result.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    const data = await (
      await fetch(Login_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    if (data.success) {
      const sessionId = await (
        await fetch(Session_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionID, movieID, value) => {
      let result = `${Base_URL}movie/${movieID}/rating?api_key=${Key}&session_id=${sessionID}`;
      let rating = await (
        await fetch(result, {
          ...defaultConfig,
          body: JSON.stringify({ value })
        })
      ).json();
  
      return rating;
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


