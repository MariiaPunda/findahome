import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'
import styles from './styles'

const Card = forwardRef(
  ({ as: Component = 'div', extend, children, ...props }, ref) => {
    const { css } = useFela()

    return (
      <Component ref={ref} className={css([styles.card, extend])} {...props}>
        {children}
      </Component>
    )
  }
)

Card.displayName = 'Card'

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node.isRequired,
}

export default Card
