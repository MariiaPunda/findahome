import PropTypes from 'prop-types'
import { useFela } from 'react-fela'
import styles from './styles'

const Card = ({ as: Component = 'div', ...props }) => {
  const { css } = useFela()

  return <Component className={css(styles.card)}>{props.children}</Component>
}

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node.isRequired,
}

export default Card
