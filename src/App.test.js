import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

let wrapper = shallow(<App />)

describe('App Component', () => {
  it('should render', () => {   
    expect(wrapper).toBeDefined
  })
})
