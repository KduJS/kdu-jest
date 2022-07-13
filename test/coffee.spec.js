import { shallow } from 'kdu-test-utils'
import Coffee from './resources/Coffee.kdu'
import CoffeeScript from './resources/CoffeeScript.kdu'

test('processes .kdu file with lang set to coffeescript', () => {
  shallow(Coffee)
})

test('processes .kdu file with lang set to coffeescript', () => {
  shallow(CoffeeScript)
})
