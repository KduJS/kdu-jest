import { shallow } from 'kdu-test-utils'
import FunctionalSFC from './resources/FunctionalSFC.kdu'

let wrapper
const clickSpy = jest.fn()
beforeEach(() => {
  wrapper = shallow(FunctionalSFC, {
    propsData: { msg: { id: 1, title: 'foo' }, onClick: clickSpy }
  })
})

describe('Processes .kdu file with functional template', () => {
  it('with nested props', () => {
    expect(wrapper.text().trim()).toBe('foo')
  })

  it('with callback prop', () => {
    wrapper.trigger('click')
    expect(clickSpy).toHaveBeenCalledWith(1)
  })
})
