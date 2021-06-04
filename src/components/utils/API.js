const axios = require("axios")
const BASEURL = 'https://api.rawg.io/api/games';

// const KEY = 'key=2e1926e930f2426e857f633a7a3c2286'
// const KEY = 'key='+process.env.REACT_APP_APIKEY;
const KEY = `key=${process.env.REACT_APP_APIKEY}`;

// const URL_PREFIX = "http://localhost:3001"
const URL_PREFIX = "https://console-log-backend.herokuapp.com"

// const SUFFIX = '&ordering=-metacritic'

const API = {
    search: function(CONFIG, SUFFIX) {
      if (!isNaN(CONFIG) && CONFIG) {
        //search by game ID
        // console.log("NUMBER: "+CONFIG)
        CONFIG=`/${CONFIG}?`;
        return axios.get(BASEURL + CONFIG + KEY + SUFFIX);
      } else if (!CONFIG) {
        //blank
        // console.log("BLANK")
        return axios.get(BASEURL + "?" + KEY + SUFFIX);
      } else if (CONFIG.includes("http")) {
        //searching NEXT & PREV
        console.log("Searching: "+CONFIG)
        return axios.get(CONFIG);
      } else {
        //For searchables
        //api/games?search=${slugifiedTerm}&key=
        CONFIG.toLowerCase().replace(/\s+/g, '-');
        CONFIG = `?search=${CONFIG}&`;
        // console.log("New CONFIG:"+CONFIG)
        return axios.get(BASEURL + CONFIG + KEY + SUFFIX);
      } 
    },
    // possible implementation for get games associated with user's walkthroughs
    searchByWalkthrough: function(IDlist, SUFFIX) {
      let gamelist = [];
      this.search(IDlist, SUFFIX).then(res=>{
          gamelist.push(res.data);
      });
      console.log(gamelist)
      return gamelist;
    },
    login: function (userData) {
        return axios.post(`${URL_PREFIX}/auth/login`, userData)
    },

    signup: function (userData) {
        return axios.post(`${URL_PREFIX}/auth/signup`, userData)
    },

    getProfile: function (token) {
        return axios.get(`${URL_PREFIX}/auth/profile`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    },
    getAllWalkthroughs: function (token) {
      return axios.get(`${URL_PREFIX}/api/findall`);
    },
    
    getOneWalkthrough: function (id) {
        return axios.get(`${URL_PREFIX}/api/find/${id}`);
    },

    getUserWalkthrough: function (id) {
        return axios.get(`${URL_PREFIX}/api/userwalkthroughs/${id}`);
    },

    getUserFav: function (id) {
        return axios.get(`${URL_PREFIX}/api/user/${id}`);
    },

    createWalkthrough: function (data, token) {
        return axios.post(`${URL_PREFIX}/api/create`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    updateWalkthrough: function (data, id, token) {
        return axios.put(`${URL_PREFIX}/api/update/${id}`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    deleteWalkthrough: function (id, token) {
        return axios.delete(`${URL_PREFIX}/api/deletewalkthrough/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    addFavorite: function (userID, walkthroughID, token) {
        return axios.put(`${URL_PREFIX}/api/addfavorite/${walkthroughID}/${userID}`, token, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    removeFavorite: function (userID, walkthroughID, token) {
        return axios.put(`${URL_PREFIX}/api/removefavorite/${walkthroughID}/${userID}`, token, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    addRating: function (rating, walkthroughID, token) {
        return axios.put(`${URL_PREFIX}/api/ratewalkthrough/${walkthroughID}/${rating}`, token, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
}

export default API