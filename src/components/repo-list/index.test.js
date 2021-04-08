import React from 'react'
import { shallow } from 'enzyme'
import RepoList from './index'
import RepoListCard from '../repo-list-card/index'

const mockUserInfo = [
  {
    login: 'a',
    avatarUrl: 'a_url',
    repo: [],
  },
  {
    login: 'b',
    avatarUrl: 'b_url',
    repo: [],
  },
]
let wrapper = shallow(
  <RepoList userInfo={mockUserInfo} />
)

describe('RepoList Component', () => {
  it('should render', () => {   
    expect(wrapper).toBeDefined
  })

  it('should render two RepoListCard Components', () => {
    expect(wrapper.find('.repo-list').length).toEqual(1)
    expect(wrapper.find(RepoListCard).length).toEqual(2)
  })

  it('should not render if userInfo is empty', () => {
    wrapper.setProps({ userInfo: [] })
    expect(wrapper.find('.repo-list').length).toEqual(0)
  })
})
