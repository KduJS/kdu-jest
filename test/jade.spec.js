import { shallow } from 'kdu-test-utils'
import Jade from './resources/Jade.kdu'

test('processes .kdu file with jade template', () => {
  const wrapper = shallow(Jade)
  expect(wrapper.is('div')).toBe(true)
  expect(wrapper.hasClass('jade')).toBe(true)
})
