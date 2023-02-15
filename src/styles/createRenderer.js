import { createRenderer } from 'fela'
import extend from 'fela-plugin-extend'

export default () => {
  return createRenderer({
    optimizeCaching: true,
    plugins: [extend()],
  })
}
