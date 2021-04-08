import React, { Component, Fragment } from 'react'
import { InputField, RepoList } from '../components'
import { getSearchResult, getUserRepos } from '../apiServices'

class MainContainer extends Component {
  cache = {}
  state = {
    inputValue: '',
    userInfo: [],
    isLoading: false,
    hasError: false,
  }

  updateCache = (key, res) => {
    this.cache[key] = res
  }

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value})
  }

  onClickHandler = () => {
    const { inputValue: keyword } = this.state
    const lowerCaseKey = keyword.toLowerCase()

    // check whether the current search term is in cache
    if (this.cache.hasOwnProperty(lowerCaseKey)) {
      this.setState({
        userInfo: this.cache[lowerCaseKey],
        hasError: false,
      })
      return
    }

    this.setState({ isLoading: true, hasError: false })
    getSearchResult(keyword)
      .then(({ data }) => {
        const { items = [] } = data
        return Promise.all(
          items.map((user) => {
            const { login, avatar_url } = user
            return getUserRepos(login).then(({ data }) => {
              return {
                login,
                avatarUrl: avatar_url,
                repos: data.map(({ description, full_name, html_url }) => ({
                  description,
                  repoName: full_name.split('/')[1],
                  repoUrl: html_url,
              }))
              }
            })
          })
        )
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          userInfo: data,
        })
        // store the key-response in cache
        this.updateCache(lowerCaseKey, data)
      })
      .catch((e) => {
        this.setState({ isLoading: false, hasError: true, userInfo: [] })
      })
  }

  render() {
    const {
      inputValue, userInfo, isLoading, hasError,
    } = this.state

    return (
      <Fragment>
        <div className="main-header">
          <h1 className="main-header__title"> Github Repository Search </h1>
          <InputField
            value={inputValue}
            onInputChange={this.onInputChange}
            onClickHandler={this.onClickHandler}
          />
        </div>
        <div className="main-content">
          {isLoading && <div className="spinner" />}
          {hasError && <p>Sorry, something went wrong, please try again!</p>}
          <RepoList userInfo={userInfo} />
        </div>
      </Fragment>
    )
  }
}

export default MainContainer
