import React, { memo } from 'react'
import RepoListCard from '../repo-list-card'
import { arrayOf, shape, array, string } from 'prop-types'

const RepoList = ({
  userInfo,
}) => {
  if (!userInfo.length) return null

  return (
    <div className="repo-list">
      { userInfo.map(({ login, avatarUrl, repos }, index) => (
        <RepoListCard
          key={index}
          userName={login}
          userAvatar={avatarUrl}
          userRepos={repos}
        />
      ))}
    </div>
  )
}

RepoList.propTypes = {
  userInfo: arrayOf(
    shape({
      login: string,
      avatarUrl: string,
      repos: array,
    })
  ).isRequired,
}

export default memo(RepoList)
