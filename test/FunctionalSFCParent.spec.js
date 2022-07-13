import { mount } from 'kdu-test-utils'
import FunctionalSFCParent from './resources/FunctionalSFCParent.kdu'

test('processes .kdu file with functional template from parent', () => {
  const wrapper = mount(FunctionalSFCParent)
  expect(wrapper.text().trim()).toBe('foo')
})
