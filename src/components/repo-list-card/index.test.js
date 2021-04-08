import React from 'react'
import { shallow } from 'enzyme'
import RepoListCard from './index'

const mockUserRepos = [
  {
    description: 'desc for a',
    repoName: 'repo a',
    repoUrl: 'a_url',
  },
  {
    description: 'desc for b',
    repoName: 'repo b',
    repoUrl: 'b_url',
  },
]

describe('RepoListCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <RepoListCard
        userName="mockName"
        userAvatar="mockAvatar"
        userRepos={mockUserRepos}
      />
    )
  })

  it('should render', () => {   
    expect(wrapper).toBeDefined
  })

  it('should render no-repo text when repo is empty', () => {
    wrapper.setProps({ userRepos: [] })
    expect(wrapper.find('.no-repo-text').length).toEqual(1)
  })

  it('should render correct number of repo card in div', () => {
    expect(wrapper.find('.repo-card').length).toEqual(2)
    wrapper.setProps({ userRepos: [] })
    expect(wrapper.find('.repo-card').length).toEqual(0)
  })
})
