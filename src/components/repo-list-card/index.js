import React, { memo } from 'react'
import { arrayOf, shape, string } from 'prop-types'

const RepoListCard = ({
  userName,
  userAvatar,
  userRepos,
}) => {
  const hasNoRepo = !userRepos.length
  const repoContainerClass = `repo-container${hasNoRepo ? '--no-repo' : ''}` 

  return (
    <div className="user-card">
      <img className="user-avatar" src={userAvatar} alt={userName} />
      <p className="user-name">{userName}</p>
      <div className={repoContainerClass}>
        { hasNoRepo && <p className="no-repo-text">This user has no repository yet...</p> }
        { userRepos.map(({ description, repoName, repoUrl }, index) => (
          <div className="repo-card" key={index}>
            <a className="repo-name" href={repoUrl}>{repoName}</a>
            <p className="repo-desc">{description}</p>
          </div>
        ))}
      </div>
      <hr className="separator" />
    </div>
  )
}

RepoListCard.propTypes = {
  userName: string,
  userAvatar: string,
  userRepos: arrayOf(
    shape({
      description: string,
      repoName: string,
      repoUrl: string,
    })
  ),
}

RepoListCard.defaultProps = {
  userName: '',
  userAvatar: '',
  userRepos: [],
}

export default memo(RepoListCard)
