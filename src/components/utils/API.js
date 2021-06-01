const BASEURL = 'https://api.rawg.io/api/games';
const KEY = '?key=2e1926e930f2426e857f633a7a3c2286'
const axios = require("axios")
const URL_PREFIX = "http://localhost:3001"
//const URL_PREFIX = ""
//https://rawg.io/api/games?search=${slugifiedTerm}&key=${process.env.APIKEY}
const API = {
    // const SUFFIX = '&ordering=-metacritic'
    search: function(CONFIG, SUFFIX) {
      return axios.get(BASEURL + CONFIG + KEY + SUFFIX);
    },
    login: function (userData) {
        return axios.post(`${URL_PREFIX}/auth/login`, userData)
    },
    signup: function (userData) {
        return axios.post(`${URL_PREFIX}/auth/signup`, userData)
    },
    getProfile: function (token) {
        return axios.get(`${URL_PREFIX}/auth/dashboard`, {
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

    getUserWalkthrough: function () {
        return axios.get(`${URL_PREFIX}/userwalkthroughs/:userid`);
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
        return axios.delete(`${URL_PREFIX}/api/delete/:walkthroughid/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }
}

export default API