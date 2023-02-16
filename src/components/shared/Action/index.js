import PropTypes from 'prop-types'
import { useFela } from 'react-fela'
import styles from './styles'

const Action = ({ as, extend, children, ...props }) => {
  const { css } = useFela()
  const Component = as || (props.href ? 'a' : 'button')

  return (
    <Component
      type={Component === 'button' ? props.type || 'button' : undefined}
      className={css([styles.action, extend])}
      {...props}
    >
      {children}
    </Component>
  )
}

Action.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  href: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Action
