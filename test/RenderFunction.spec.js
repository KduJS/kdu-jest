import { shallow } from 'kdu-test-utils'
import RenderFunction from './resources/RenderFunction.kdu'

test('processes .kdu file with no template', () => {
  const wrapper = shallow(RenderFunction)

  expect(wrapper.is('section')).toBe(true)
})
