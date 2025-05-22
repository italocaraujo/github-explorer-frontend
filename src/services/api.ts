import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL 
  ? `${process.env.NEXT_PUBLIC_API_URL}/api` 
  : '/api'; 

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/api'  
    : 'https://github-explorer-backend-nfr5.onrender.com/api',  
  timeout: 5000
});

export const githubService = {
  getProfile: (username: string) => api.get(`/github/profile/${username}`),
  getRepos: (username: string) => api.get(`/github/repos/${username}`),
  getReposByLanguage: (username: string, language: string) => 
    api.get(`/github/repos/${username}/by-language?language=${language}`),
  searchUsers: (query: string) => api.get(`/github/search?q=${query}`)
}

export const favoritesService = {
  getFavorites: () => api.get('/favorites'),
  addFavorite: (username: string) => api.post(`/favorites/${username}`),
  removeFavorite: (username: string) => api.delete(`/favorites/${username}`),
  checkFavorite: (username: string) => api.get(`/favorites/check?username=${username}`)
}