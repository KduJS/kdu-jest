import { shallow } from 'kdu-test-utils'
import Pug from './resources/Pug.kdu'

test('processes .kdu file with pug template', () => {
  const wrapper = shallow(Pug)
  expect(wrapper.is('div')).toBe(true)
  expect(wrapper.hasClass('pug')).toBe(true)
})
