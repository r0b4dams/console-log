const BASEURL = 'https://api.rawg.io/api/games';
const KEY = '?key=2e1926e930f2426e857f633a7a3c2286'
const axios = require("axios")
const URL_PREFIX = "http://localhost:3001"
//const URL_PREFIX = ""

const API = {
    // const SUFFIX = '&ordering=-metacritic'
    search: function(CONFIG, SUFFIX) {
      return axios.get(BASEURL + CONFIG + KEY + SUFFIX);
    },
    login: function (userData) {
        return axios.post(`${URL_PREFIX}/login`, userData)
    },
    signup: function (userData) {
        return axios.post(`${URL_PREFIX}/signup`, userData)
    },
    getProfile: function (token) {
        return axios.get(`${URL_PREFIX}/profile`, {
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

    createWalkthrough: function (data, token) {
        return axios.post(`${URL_PREFIX}/create`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    updateWalkthrough: function (data, id, token) {
        return axios.put(`${URL_PREFIX}/update/${id}`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    deleteWalkthrough: function (id, token) {
        return axios.delete(`${URL_PREFIX}/delete/:walkthroughid/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }
}

export default API