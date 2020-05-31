import axios from './axios.js'

/**
 * 登陆
 */
export const login = (username, password) => axios.post('/login', { username: username, password: password }, {});

/**
 * 搜索电影或明星
 */
export const searchMovie = (searchVal) => axios.post('/searchMovie', { searchVal: searchVal }, {});