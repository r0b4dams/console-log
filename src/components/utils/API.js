const BASEURL = "";
const axios = require("axios")
const URL_PREFIX = "http://localhost:3001"
//const URL_PREFIX = ""

const API = {
    search: function(CONFIG) {
      return axios.get(BASEURL + CONFIG);
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
    
    getOneWalkthrough: function () {
        return axios.get(`${URL_PREFIX}/find/:walkthroughid`);
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