import axios from "axios"

const getSearchResult = (searchTerm) => {
  return axios.get(`https://api.github.com/search/users`, {
    params: {
      q: searchTerm
    },
    auth: {
      username: 'beeefarmer',
      password: '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',
    },
  })
}

const getUserRepos = (userName) => {
  return axios.get(`https://api.github.com/users/${userName}/repos`, {
    auth: {
      username: 'beeefarmer',
      password: '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',
    }
  })
}

export {
  getSearchResult,
  getUserRepos,
}
