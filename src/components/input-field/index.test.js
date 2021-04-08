import React from 'react'
import { shallow } from 'enzyme'
import InputField from './index'

let func = jest.fn()
let wrapper = shallow(
  <InputField
    value="input"
    onInputChange={func}
    onClickHandler={func}
  />
)

describe('InputField Component', () => {
  it('should render', () => {   
    expect(wrapper).toBeDefined
    expect(wrapper.find('input').props().value).toBe('input')
  })

  it('should render correct input value upon change', () => {
    wrapper.setProps({ value: 'newInput'})
    expect(wrapper.find('input').props().value).toBe('newInput')
  })
})
